// api/send-email.js
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, company, email, phone, message, checklist } = req.body;

    if (!name || !company || !email || !phone || !message) {
      return res.status(400).json({ error: '모든 필드를 입력해주세요.' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    let checklistHTML = '';
    if (checklist && checklist.length > 0) {
      checklistHTML = '<ul style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">';
      checklist.forEach(item => {
        checklistHTML += `<li style="margin-bottom: 10px;"><strong>${item.item}</strong>`;
        
        if (item.hasFile) {
          checklistHTML += `<br/><span style="color: #2E7D32;">📎 파일: ${item.fileName}</span>`;
        }
        
        if (item.hasText) {
          checklistHTML += `<br/><span style="color: #1976D2;">📝 ${item.text}</span>`;
        }
        
        if (item.hasItrData) {
          checklistHTML += `<br/><span style="color: #E65100;">🔐 ITR ID: ${item.itrId}</span>`;
          checklistHTML += `<br/><span style="color: #E65100;">🔐 Password: ${item.itrPassword}</span>`;
        }
        
        checklistHTML += '</li>';
      });
      checklistHTML += '</ul>';
    }

    const emailHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: white; padding: 30px; border: 1px solid #ddd; border-top: none; }
    .section { margin-bottom: 25px; }
    .section-title { color: #E65100; font-size: 18px; font-weight: bold; margin-bottom: 10px; border-bottom: 2px solid #E65100; padding-bottom: 5px; }
    .info-table { width: 100%; border-collapse: collapse; }
    .info-table td { padding: 10px; border-bottom: 1px solid #eee; }
    .info-table td:first-child { font-weight: bold; color: #555; width: 120px; }
    .message-box { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #2E7D32; border-radius: 4px; }
    .footer { background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 10px 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 28px;">📋 FORM 10F 상담 신청</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">새로운 상담 요청이 도착했습니다</p>
    </div>
    
    <div class="content">
      <div class="section">
        <div class="section-title">👤 신청자 정보</div>
        <table class="info-table">
          <tr>
            <td>이름</td>
            <td>${name}</td>
          </tr>
          <tr>
            <td>회사명</td>
            <td><strong>${company}</strong></td>
          </tr>
          <tr>
            <td>이메일</td>
            <td><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td>연락처</td>
            <td>${phone}</td>
          </tr>
        </table>
      </div>
      
      <div class="section">
        <div class="section-title">💬 문의 내용</div>
        <div class="message-box">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
      
      ${checklist && checklist.length > 0 ? `
      <div class="section">
        <div class="section-title">📁 체크된 서류 정보</div>
        ${checklistHTML}
      </div>
      ` : ''}
    </div>
    
    <div class="footer">
      <p>이 이메일은 FORM 10F 웹사이트 상담 신청 폼에서 자동 발송되었습니다.</p>
      <p style="margin: 5px 0;">답변은 신청자 이메일(${email})로 직접 보내주세요.</p>
    </div>
  </div>
</body>
</html>
    `;

    const info = await transporter.sendMail({
      from: `"FORM 10F 상담" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || 'daniel.yibh@gmail.com',
      replyTo: email,
      subject: `🔔 FORM 10F 상담 신청 - ${company}`,
      html: emailHTML,
    });

    console.log('Message sent: %s', info.messageId);

    return res.status(200).json({ 
      success: true, 
      message: '이메일이 성공적으로 전송되었습니다.',
      messageId: info.messageId 
    });

  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ 
      error: '이메일 전송 중 오류가 발생했습니다.', 
      details: error.message 
    });
  }
}