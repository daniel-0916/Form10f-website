import React, { useState } from 'react';
import { CheckCircle, FileText, Upload, MessageSquare, ChevronDown, Globe, Menu, X, Check, Paperclip } from 'lucide-react';

export default function Form10FPlatform() {
  const [language, setLanguage] = useState('ko');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [checklist, setChecklist] = useState({
    panCard: { checked: false, file: null },
    dsc: { checked: false },
    itrRegistered: { checked: false, itrId: '', itrPassword: '' },
    businessCert: { checked: false, file: null },
    trc: { checked: false, file: null },
    passport: { checked: false, file: null },
    fatherName: { checked: false, text: '' },
    email: { checked: false, text: '' },
    contact: { checked: false, text: '' }
  });
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const textInputFields = ['fatherName', 'email', 'contact'];
  const fileUploadFields = ['panCard', 'businessCert', 'trc', 'passport'];
  const checkOnlyFields = ['dsc'];
  const itrField = 'itrRegistered';

  const content = {
    ko: {
      nav: {
        home: '홈',
        guide: '가이드',
        service: '서비스 신청',
        faq: 'FAQ',
        contact: '문의하기'
      },
      hero: {
        title: '인도 세금 절약의 핵심',
        subtitle: 'FORM 10F 전문 서비스',
        desc: '한-인도 이중과세협약 혜택으로 연간 수억원 절약하세요',
        cta: '무료 상담 신청',
        cta2: '서비스 시작하기'
      },
      benefits: {
        title: '왜 FORM 10F가 필요한가요?',
        items: [
          {
            title: '세금 절약의 핵심 전략',
            desc: '로열티 20%→10%, 기술서비스료 20%→10%로 세율 감소. 연간 수천만원~수억원 절약'
          },
          {
            title: '법적 리스크 예방',
            desc: '채무불이행 납세자 지정, 해외송금 차단 등의 위험을 사전에 완벽히 방지'
          },
          {
            title: '전문가의 실무 진행',
            desc: '15년 경력 인도비즈니스 전문가가 복잡한 전자신고를 완벽하게 처리'
          }
        ]
      },
      checklist: {
        title: '필요 서류 체크리스트',
        subtitle: '서비스 신청을 위해 다음 서류를 준비해주세요',
        items: {
          panCard: 'PAN 카드 보유 여부',
          dsc: 'DSC (디지털서명인증서) 보유 여부',
          itrRegistered: 'ITR 등록 여부 (ID/비밀번호 보유)',
          businessCert: '영문 사업자등록증',
          trc: 'TRC (거주자증명서)',
          passport: '대표자 여권 사본',
          fatherName: '대표자 부친 성함 (영문)',
          email: '이메일 주소',
          contact: '연락처'
        },
        uploadFile: '파일 첨부',
        fileSelected: '파일 선택됨'
      },
      process: {
        title: '서비스 진행 프로세스',
        steps: [
          { title: '상담 신청', desc: '무료 상담으로 상황 파악' },
          { title: '서류 준비', desc: '필요 서류 안내 및 수집' },
          { title: '전자 신고', desc: '인도 세무당국 시스템 등록' },
          { title: '완료', desc: 'FORM 10F 제출 완료' }
        ]
      },
      contact: {
        title: '무료 상담 신청',
        subtitle: '인도비즈니스 15년 경력전문가가 직접 상담해드립니다',
        name: '이름',
        company: '회사명',
        email: '이메일',
        phone: '연락처',
        message: '문의 내용',
        submit: '상담 신청하기',
        success: '상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.',
        checklistInfo: '체크된 서류 정보'
      },
      faq: {
        title: '자주 묻는 질문',
        items: [
          {
            q: 'FORM 10F는 언제 제출해야 하나요?',
            a: '인도에서 소득이 발생하기 전에 미리 제출하는 것이 좋습니다. 매년 4월(인도 회계연도 시작) 전에 준비를 완료하시는 것을 권장합니다.'
          },
          {
            q: '제출하지 않으면 어떻게 되나요?',
            a: 'DTAA 혜택을 받을 수 없어 높은 세율(20% 이상)로 원천징수되며, 채무불이행 납세자로 지정될 수 있습니다. 벌금 및 법적 분쟁의 위험도 있습니다.'
          },
          {
            q: '처리 기간은 얼마나 걸리나요?',
            a: '서류가 모두 준비된 경우 보통 1주 정도 소요됩니다. 다만, PAN보유한 상황에서, DSC가 필요한 경우에는 추가 시간이 필요할 수 있습니다.'
          },
          {
            q: 'PAN이 없어도 가능한가요?',
            a: '네, 가능합니다. PAN이 없는 비거주자를 위한 별도의 절차가 있으며, 저희가 처음부터 끝까지 도와드립니다.'
          }
        ]
      },
      footer: {
        about: '회사 소개',
        aboutText: '15년 인도비즈니스 경력의 전문가가 한국 기업의 인도 세무를 완벽하게 지원합니다.',
        services: '서비스',
        contact: '연락처',
        rights: '© 2025 FORM 10F 전문 서비스. All rights reserved.'
      }
    },
    en: {
      nav: {
        home: 'Home',
        guide: 'Guide',
        service: 'Apply',
        faq: 'FAQ',
        contact: 'Contact'
      },
      hero: {
        title: 'India Tax Savings Solution',
        subtitle: 'FORM 10F Expert Service',
        desc: 'Save millions annually with Korea-India DTAA benefits',
        cta: 'Free Consultation',
        cta2: 'Start Service'
      },
      benefits: {
        title: 'Why FORM 10F?',
        items: [
          {
            title: 'Key Tax Strategy',
            desc: 'Reduce rates: Royalty 20%→10%, Technical fees 20%→10%. Save millions annually'
          },
          {
            title: 'Risk Prevention',
            desc: 'Prevent designation as defaulter and overseas remittance blocking'
          },
          {
            title: 'Expert Processing',
            desc: '15 years of experience in India business handling complex e-filing perfectly'
          }
        ]
      },
      checklist: {
        title: 'Required Documents Checklist',
        subtitle: 'Please prepare the following documents for service application',
        items: {
          panCard: 'PAN Card holder',
          dsc: 'DSC (Digital Signature Certificate) holder',
          itrRegistered: 'ITR registered (ID/Password available)',
          businessCert: 'Business Registration Certificate (English)',
          trc: 'TRC (Tax Residency Certificate)',
          passport: 'Representative Passport copy',
          fatherName: "Representative's Father's name (English)",
          email: 'Email address',
          contact: 'Contact number'
        },
        uploadFile: 'Attach file',
        fileSelected: 'File selected'
      },
      process: {
        title: 'Service Process',
        steps: [
          { title: 'Consultation', desc: 'Free consultation to assess situation' },
          { title: 'Documentation', desc: 'Guidance and collection of required documents' },
          { title: 'E-filing', desc: 'Registration in Indian tax system' },
          { title: 'Completion', desc: 'FORM 10F submission completed' }
        ]
      },
      contact: {
        title: 'Free Consultation Request',
        subtitle: 'Direct consultation with 15 years experienced expert in India business',
        name: 'Name',
        company: 'Company',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        submit: 'Request Consultation',
        success: 'Your consultation request has been submitted. We will contact you soon.',
        checklistInfo: 'Checked Documents Information'
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            q: 'When should I submit FORM 10F?',
            a: 'It is recommended to submit before income occurs in India. Complete preparation before April (start of Indian fiscal year) annually.'
          },
          {
            q: 'What happens if not submitted?',
            a: 'Cannot receive DTAA benefits, subject to higher withholding tax (20%+), risk of designation as defaulter, penalties and legal disputes.'
          },
          {
            q: 'How long does processing take?',
            a: 'Usually about 1 week if all documents are ready. However, additional time may be needed if DSC is required when PAN is already available.'
          },
          {
            q: 'Is it possible without PAN?',
            a: 'Yes, it is possible. There is a separate procedure for non-residents without PAN, and we guide you from start to finish.'
          }
        ]
      },
      footer: {
        about: 'About Us',
        aboutText: 'Expert with 15 years of India business experience providing complete tax support for Korean companies.',
        services: 'Services',
        contact: 'Contact',
        rights: '© 2025 FORM 10F Expert Service. All rights reserved.'
      }
    }
  };

  const t = content[language];

  const handleChecklistToggle = (key) => {
    setChecklist({
      ...checklist,
      [key]: { ...checklist[key], checked: !checklist[key].checked }
    });
  };

  const handleFileChange = (key, event) => {
    const file = event.target.files[0];
    if (file) {
      setChecklist({
        ...checklist,
        [key]: { ...checklist[key], file: file }
      });
    }
  };

  const handleTextChange = (key, value) => {
    setChecklist({
      ...checklist,
      [key]: { ...checklist[key], text: value }
    });
  };

  const handleItrChange = (field, value) => {
    setChecklist({
      ...checklist,
      itrRegistered: { ...checklist.itrRegistered, [field]: value }
    });
  };

  const getCheckedItems = () => {
    return Object.entries(checklist)
      .filter(([key, value]) => value.checked)
      .map(([key, value]) => ({
        item: t.checklist.items[key],
        hasFile: value.file !== null,
        fileName: value.file ? value.file.name : null,
        hasText: value.text !== undefined && value.text !== '',
        text: value.text || null,
        hasItrData: value.itrId !== undefined && (value.itrId !== '' || value.itrPassword !== ''),
        itrId: value.itrId || null,
        itrPassword: value.itrPassword || null
      }));
  };

  const handleSubmit = async () => {
    if (formData.name && formData.company && formData.email && formData.phone && formData.message) {
      const checkedItems = getCheckedItems();

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            checklist: checkedItems
          })
        });

        const data = await response.json();

        if (response.ok) {
          alert(t.contact.success);
          setFormData({ name: '', company: '', email: '', phone: '', message: '' });
          setChecklist({
            panCard: { checked: false, file: null },
            dsc: { checked: false },
            itrRegistered: { checked: false, itrId: '', itrPassword: '' },
            businessCert: { checked: false, file: null },
            trc: { checked: false, file: null },
            passport: { checked: false, file: null },
            fatherName: { checked: false, text: '' },
            email: { checked: false, text: '' },
            contact: { checked: false, text: '' }
          });
        } else {
          throw new Error(data.error || 'Failed to send email');
        }
      } catch (error) {
        console.error('Email send error:', error);
        alert(language === 'ko' 
          ? '상담 신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' 
          : 'An error occurred while submitting your consultation request. Please try again later.');
      }
    } else {
      alert(language === 'ko' ? '모든 항목을 입력해주세요.' : 'Please fill in all fields.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-green-700" />
              <span className="ml-2 text-xl font-bold text-green-800">FORM 10F</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === key
                      ? 'text-orange-600'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {value}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
                className="flex items-center space-x-1 text-sm text-gray-700 hover:text-orange-600"
              >
                <Globe className="h-4 w-4" />
                <span>{language === 'ko' ? 'EN' : 'KO'}</span>
              </button>
              
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveSection(key);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-700 hover:text-orange-600"
                >
                  {value}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.hero.title}</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-100">{t.hero.subtitle}</h2>
          <p className="text-xl mb-8 text-green-50 max-w-3xl mx-auto">{t.hero.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              {t.hero.cta}
            </button>
            <button className="bg-white text-green-800 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              {t.hero.cta2}
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.benefits.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.benefits.items.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border-2 border-green-100 hover:border-orange-300 transition-colors">
                <CheckCircle className="h-12 w-12 text-green-700 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Upload className="h-16 w-16 text-green-700 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{t.checklist.title}</h2>
            <p className="text-gray-600">{t.checklist.subtitle}</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="space-y-4">
              {Object.entries(t.checklist.items).map(([key, value]) => (
                <div
                  key={key}
                  className="border-2 rounded-lg transition-colors"
                  style={{
                    borderColor: checklist[key].checked ? '#2E7D32' : '#E5E7EB'
                  }}
                >
                  <label className="flex items-center p-4 cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={checklist[key].checked}
                      onChange={() => handleChecklistToggle(key)}
                      className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                    />
                    <span className="ml-3 text-gray-700 flex-grow">{value}</span>
                    {checklist[key].checked && (
                      <Check className="h-5 w-5 text-green-600" />
                    )}
                  </label>
                  
                  {checklist[key].checked && !checkOnlyFields.includes(key) && (
                    <div className="px-4 pb-4 border-t">
                      {key === itrField ? (
                        <div className="mt-3 space-y-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              ID
                            </label>
                            <input
                              type="text"
                              value={checklist[key].itrId || ''}
                              onChange={(e) => handleItrChange('itrId', e.target.value)}
                              placeholder="ITR ID"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Password
                            </label>
                            <input
                              type="password"
                              value={checklist[key].itrPassword || ''}
                              onChange={(e) => handleItrChange('itrPassword', e.target.value)}
                              placeholder="ITR Password"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      ) : fileUploadFields.includes(key) ? (
                        <div className="mt-3 flex items-center gap-3">
                          <label className="flex items-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg cursor-pointer transition-colors text-sm font-medium">
                            <Paperclip className="h-4 w-4" />
                            {t.checklist.uploadFile}
                            <input
                              type="file"
                              onChange={(e) => handleFileChange(key, e)}
                              className="hidden"
                            />
                          </label>
                          {checklist[key].file && (
                            <span className="text-sm text-gray-600 flex items-center gap-1">
                              <Check className="h-4 w-4 text-green-600" />
                              {checklist[key].file.name}
                            </span>
                          )}
                        </div>
                      ) : (
                        <div className="mt-3">
                          <input
                            type={key === 'email' ? 'email' : 'text'}
                            value={checklist[key].text || ''}
                            onChange={(e) => handleTextChange(key, e.target.value)}
                            placeholder={value}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.process.title}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.faq.title}</h2>
          <div className="space-y-4">
            {t.faq.items.map((item, index) => (
              <details key={index} className="bg-white p-6 rounded-lg shadow-md group">
                <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center">
                  {item.q}
                  <ChevronDown className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-700 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MessageSquare className="h-16 w-16 text-orange-300 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">{t.contact.title}</h2>
            <p className="text-green-100">{t.contact.subtitle}</p>
          </div>

          <div className="bg-white text-gray-900 p-8 rounded-xl shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.company}
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.phone}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.contact.message}
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-4 rounded-lg font-semibold text-lg transition-all shadow-lg"
            >
              {t.contact.submit}
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">{t.footer.about}</h3>
              <p className="text-sm leading-relaxed">{t.footer.aboutText}</p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">{t.footer.services}</h3>
              <ul className="space-y-2 text-sm">
                <li>FORM 10F {language === 'ko' ? '전자신고' : 'E-filing'}</li>
                <li>{language === 'ko' ? '세무 컨설팅' : 'Tax Consulting'}</li>
                <li>DTAA {language === 'ko' ? '혜택 분석' : 'Benefits Analysis'}</li>
                <li>{language === 'ko' ? '인도 법인 세무' : 'India Corporate Tax'}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">{t.footer.contact}</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: contact@form10f.com</li>
                <li>{language === 'ko' ? '전화' : 'Phone'}: +82-2-XXXX-XXXX</li>
                <li>{language === 'ko' ? '인도' : 'India'}: +91-XXX-XXX-XXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}