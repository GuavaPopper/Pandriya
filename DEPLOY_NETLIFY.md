# 🚀 Cara Deploy Pandriya ke Netlify

## 📋 Persiapan

### 1. Install Netlify CLI (Optional)
```bash
npm install -g netlify-cli
```

## 🌐 Deploy ke Netlify

### Cara 1: Deploy via Web UI (Paling Mudah)

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Login ke Netlify**
   - Buka https://app.netlify.com
   - Login dengan akun GitHub

3. **Import Project**
   - Klik "Add new site" → "Import an existing project"
   - Pilih repository GitHub Anda
   - Build settings sudah otomatis terbaca dari `netlify.toml`
   - Klik "Deploy site"

4. **Set Environment Variables**
   - Setelah deploy, buka "Site settings" → "Environment variables"
   - Klik "Add a variable"
   - Tambahkan:
     - Key: `GEMINI_API_KEY`
     - Value: `AIzaSyABcYmdkd6n_N90NYvKjNTTxBGV-Z5E9s8`
   - Klik "Save"

5. **Redeploy**
   - Kembali ke "Deploys"
   - Klik "Trigger deploy" → "Deploy site"

### Cara 2: Deploy via CLI

1. **Login**
   ```bash
   netlify login
   ```

2. **Deploy**
   ```bash
   netlify deploy
   ```

3. **Set Environment Variable**
   ```bash
   netlify env:set GEMINI_API_KEY "AIzaSyABcYmdkd6n_N90NYvKjNTTxBGV-Z5E9s8"
   ```

4. **Production Deploy**
   ```bash
   netlify deploy --prod
   ```

## ✅ Verifikasi

Setelah deploy sukses:
1. Buka URL yang diberikan Netlify (contoh: `https://pandriya-xyz.netlify.app`)
2. Cek Console browser (`F12`) - seharusnya muncul "Environment: Production"
3. Test AI Report dan Chatbot

## 🔒 Keamanan API Key

✅ **AMAN** - API key tersimpan di Netlify Environment Variables
- Tidak terlihat di source code
- Tidak ter-commit ke GitHub
- Hanya bisa diakses oleh Netlify Functions

## 🛠️ Troubleshooting

### Functions tidak jalan
1. Pastikan `netlify.toml` ada di root folder
2. Pastikan Environment Variable sudah di-set
3. Cek Netlify logs: Site → Functions → View logs

### CORS Error
Netlify Functions sudah include CORS headers, seharusnya tidak ada masalah.

### API Key tidak terbaca
1. Cek Environment Variables di Netlify dashboard
2. Pastikan variablenya bernama `GEMINI_API_KEY` (case-sensitive)
3. Redeploy setelah set environment variable

## 📁 Struktur File untuk Netlify

```
Pandriya/
├── netlify/
│   └── functions/
│       ├── ai-report.js
│       └── ai-chat.js
├── netlify.toml
├── Index.html
├── script.js
├── styles.css
├── package.json
└── .gitignore
```

## 🎯 Custom Domain (Optional)

Di Netlify dashboard:
1. Domain settings → Add custom domain
2. Ikuti instruksi DNS configuration

## 🌿 Tim Pandriya - Innovillage 6th
