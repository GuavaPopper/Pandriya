# 🔐 Environment Setup Guide

## ⚠️ PENTING: Keamanan Kredensial

File ini menjelaskan cara setup environment variables dengan AMAN untuk Pandriya Dashboard.

## 📁 File Environment

### File yang HARUS di-gitignore (sudah dikonfigurasi):
- ✅ `.env` - Environment file untuk Node.js/backend
- ✅ `env.js` - Environment file untuk browser (berisi API key)

### File yang AMAN untuk commit:
- ✅ `env.example.js` - Template tanpa API key asli

## 🚀 Setup Langkah-demi-Langkah

### 1. Copy Template
```bash
# Di Windows PowerShell
Copy-Item env.example.js env.js

# Di macOS/Linux
cp env.example.js env.js
```

### 2. Edit `env.js`
Buka file `env.js` dan ganti placeholder dengan API key Anda:

```javascript
const ENV = {
    GEMINI_API_KEY: 'YOUR_ACTUAL_API_KEY_HERE' // ← Ganti ini!
};
```

Contoh:
```javascript
const ENV = {
    GEMINI_API_KEY: 'AIzaSyBOW6ZronM7DmumnlR9WZczxDjq5czTONw'
};
```

### 3. Verifikasi File Di-gitignore
Pastikan `env.js` ada di `.gitignore`:

```bash
# Cek isi .gitignore
cat .gitignore  # macOS/Linux
type .gitignore # Windows

# Harus ada:
# env.js
```

### 4. Test
Buka `Index.html` di browser dan cek console (F12):
- ✅ Tidak ada error "GEMINI_API_KEY tidak ditemukan"
- ✅ Laporan AI dan chatbot berfungsi

## 🔒 Keamanan Best Practices

### ❌ JANGAN PERNAH:
1. Commit file `env.js` ke Git
2. Share API key di chat/email
3. Hardcode API key di file yang di-commit
4. Screenshot dengan API key visible

### ✅ SELALU:
1. Gunakan `env.example.js` sebagai template
2. Tambahkan `env.js` ke `.gitignore`
3. Rotate API key jika terekspos
4. Gunakan environment variables berbeda untuk dev/prod

## 🌐 Untuk Production/Deployment

### Vercel / Netlify
```bash
# Set environment variable via dashboard:
GEMINI_API_KEY=your_key_here
```

### Cloudflare Pages
```bash
# Environment Variables section:
GEMINI_API_KEY=your_key_here
```

### Backend API (Recommended)
Untuk production, lebih baik:
1. Buat backend API endpoint
2. API key disimpan di backend (tidak di browser)
3. Frontend call backend, bukan langsung ke Gemini

Contoh struktur:
```
Frontend (Browser) → Backend API → Google Gemini
                     ↑
                  API Key tersimpan di sini (aman)
```

## 📝 File Structure

```
Pandriya/
├── .env                # ❌ Di-gitignore (untuk backend)
├── env.js              # ❌ Di-gitignore (untuk browser)
├── env.example.js      # ✅ Template (aman di-commit)
├── .gitignore          # ✅ Konfigurasi ignore
├── Index.html          # Load env.js sebelum script.js
├── script.js           # Gunakan ENV.GEMINI_API_KEY
└── config.js           # Gunakan ENV.GEMINI_API_KEY
```

## 🧪 Testing Environment

### Test di Browser Console
```javascript
// Cek apakah ENV sudah loaded
console.log(typeof ENV); // Should be "object"

// Cek API key (HATI-HATI! Jangan di production)
console.log(ENV.GEMINI_API_KEY ? '✅ API Key loaded' : '❌ API Key missing');

// Test API key (tanpa menampilkan key)
console.log('Key length:', ENV.GEMINI_API_KEY.length); // Should be 39
```

### Test Functionality
1. Buka `Index.html`
2. Scroll ke Dashboard Demo
3. Lihat apakah Laporan AI generate
4. Test chatbot dengan pertanyaan
5. Cek console untuk errors

## 🔄 Rotating API Key

Jika API key terekspos:

### 1. Revoke Old Key
```
1. Login ke Google Cloud Console
2. Go to APIs & Services → Credentials
3. Find your API key
4. Click "Delete" atau "Regenerate"
```

### 2. Generate New Key
```
1. Click "Create Credentials" → "API Key"
2. Copy new key
3. Update env.js dengan key baru
```

### 3. Update Everywhere
```javascript
// env.js
const ENV = {
    GEMINI_API_KEY: 'NEW_KEY_HERE' // ← Update
};
```

## 📊 Current Setup Status

| File | API Key Location | Status |
|------|------------------|--------|
| `script.js` | ❌ Removed | ✅ Aman |
| `config.js` | ❌ Removed | ✅ Aman |
| `env.js` | ✅ Here | ⚠️ Gitignored |
| `env.example.js` | ❌ Placeholder only | ✅ Aman untuk commit |

## 🆘 Troubleshooting

### Error: "GEMINI_API_KEY tidak ditemukan"
**Solusi:**
1. Pastikan file `env.js` exists
2. Pastikan `env.js` di-load sebelum `script.js` di HTML
3. Cek console untuk syntax error di `env.js`

### API calls gagal
**Solusi:**
1. Verify API key valid (cek Google Cloud Console)
2. Cek quota belum habis
3. Verify API enabled (Generative Language API)

### File env.js tidak ter-ignore
**Solusi:**
```bash
# Remove dari Git jika sudah ter-commit
git rm --cached env.js

# Pastikan ada di .gitignore
echo "env.js" >> .gitignore

# Commit perubahan
git add .gitignore
git commit -m "Add env.js to gitignore"
```

## 📚 Resources

- [Google Cloud - Best Practices for API Keys](https://cloud.google.com/docs/authentication/api-keys)
- [OWASP - API Security](https://owasp.org/www-project-api-security/)
- [12 Factor App - Config](https://12factor.net/config)

## ✅ Checklist

Setup Complete ketika:
- [ ] File `env.js` dibuat dari template
- [ ] API key sudah diisi di `env.js`
- [ ] `env.js` ada di `.gitignore`
- [ ] `Index.html` load `env.js` sebelum `script.js`
- [ ] Dashboard berfungsi (no console errors)
- [ ] Laporan AI dan chatbot working
- [ ] File `env.js` TIDAK muncul di `git status`

---

**INGAT:** Keamanan kredensial adalah tanggung jawab Anda! 🔐

**Tim Pandriya - Innovillage 6th** 🌿
