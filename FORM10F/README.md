# FORM 10F 전문 서비스 플랫폼

한-인도 이중과세협약 FORM 10F 전문 서비스 웹사이트

## 🚀 빠른 시작

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용 추가:
```env
GMAIL_USER=daniel.yibh@gmail.com
GMAIL_APP_PASSWORD=your_16_digit_app_password_here
RECIPIENT_EMAIL=daniel.yibh@gmail.com
```

**Gmail 앱 비밀번호 생성:**
1. https://myaccount.google.com → 보안
2. 2단계 인증 활성화
3. 앱 비밀번호 생성
4. 16자리 비밀번호 복사

### 3. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 http://localhost:3000 접속

## 📦 Vercel 배포

### GitHub에 업로드
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[username]/form10f-website.git
git push -u origin main
```

### Vercel 배포

1. https://vercel.com 접속 및 GitHub 로그인
2. "New Project" 클릭
3. GitHub 저장소 선택
4. **환경 변수 설정:**
   - `GMAIL_USER`: daniel.yibh@gmail.com
   - `GMAIL_APP_PASSWORD`: [Gmail 앱 비밀번호]
   - `RECIPIENT_EMAIL`: daniel.yibh@gmail.com
5. "Deploy" 클릭

## 🌐 주요 기능

- ✅ 한/영 이중 언어 지원
- ✅ 반응형 디자인
- ✅ 인터랙티브 서류 체크리스트
- ✅ 파일 업로드 기능
- ✅ 이메일 자동 전송
- ✅ ITR ID/비밀번호 입력
- ✅ FAQ 섹션

## 🛠 기술 스택

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend**: Vercel Serverless Functions
- **Email**: Nodemailer

## 📁 프로젝트 구조
```
form10f-website/
├── api/
│   └── send-email.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── .gitignore
```

## 🐛 문제 해결

**이메일이 전송되지 않을 때:**
1. Vercel → Settings → Environment Variables 확인
2. Gmail 앱 비밀번호 재생성
3. Vercel Functions 로그 확인
4. 재배포

## 📄 라이선스

© 2025 FORM 10F 전문 서비스. All rights reserved.