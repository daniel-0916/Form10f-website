export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**저장 위치:** `form10f-website/postcss.config.js` (메인 폴더)

---

### **파일 10: .gitignore**
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Dependencies
node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.production.local
.env.development.local
.env.test.local

# Vercel
.vercel

# Build
build