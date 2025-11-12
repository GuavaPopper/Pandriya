# ⚡ Quick Start Guide - Pandriya AI

## 🎯 3 Langkah Mudah

### 0️⃣ Setup API Key (WAJIB!)
```bash
# Copy template environment
Copy-Item env.example.js env.js

# Edit env.js, ganti YOUR_API_KEY_HERE dengan API key Anda
```

**File `env.js` harus berisi:**
```javascript
const ENV = {
    GEMINI_API_KEY: 'AIzaSyBOW6ZronM7DmumnlR9WZczxDjq5czTONw' // Ganti ini!
};
```

📖 **Detail setup:** Baca [ENV_SETUP.md](ENV_SETUP.md)

### 1️⃣ Buka Dashboard
```bash
# Option A: Langsung buka file
Klik 2x pada Index.html

# Option B: Gunakan live server
python -m http.server 8000
# Lalu buka http://localhost:8000
```

### 2️⃣ Scroll ke Dashboard Demo
- Scroll ke bawah sampai bagian **"📊 Dashboard Demo"**
- Laporan AI akan otomatis muncul
- Lihat grafik dan statistik

### 3️⃣ Coba Chatbot
Ketik salah satu pertanyaan ini:
```
✅ Kapan saya harus ganti umpan?
✅ Berapa lalat buah hari ini?
✅ Status perangkap bagaimana?
```

## 🧪 Testing (Opsional)

Buka `test-ai.html` untuk:
- ✅ Test laporan AI
- ✅ Test berbagai pertanyaan chatbot
- ✅ Lihat statistics (success rate, response time)
- ✅ Debug jika ada masalah

## 📁 File Penting

| File | Fungsi |
|------|--------|
| `Index.html` | Dashboard utama |
| `script.js` | Logic AI & interaksi |
| `.env` | API key (JANGAN SHARE!) |
| `test-ai.html` | Testing console |
| `USAGE_GUIDE.md` | Panduan lengkap |

## 🔑 API Key

API key sekarang **TIDAK** hardcoded, tetapi di file terpisah:
- File `env.js` berisi API key (di-gitignore)
- File `env.example.js` adalah template
- **WAJIB** setup `env.js` sebelum jalankan dashboard

**⚠️ PENTING:** Jangan commit `env.js` ke GitHub!

## 🎨 Fitur Utama

### 🤖 Laporan AI
- Auto-generate saat halaman dibuka
- Klik "🔄 Refresh Laporan" untuk update
- Analisis data 7 hari terakhir

### 💬 Chatbot AI
- Tanya apapun tentang kebun
- Respons 2-5 detik
- Bahasa Indonesia yang ramah

### 📊 Dashboard
- Data real-time (mock)
- Grafik interaktif
- 3 stat cards

## ❓ Troubleshooting Cepat

**Laporan tidak muncul?**
→ Refresh halaman (F5)

**Chatbot tidak respons?**
→ Cek koneksi internet

**Error di console?**
→ Verifikasi API key di `.env`

**Loading terlalu lama?**
→ Tunggu 10 detik atau coba lagi

## 📚 Dokumentasi Lengkap

Baca file-file ini untuk detail:
- `README.md` - Overview & setup
- `USAGE_GUIDE.md` - Cara pakai lengkap
- `AI_INTEGRATION.md` - Detail teknis
- `CHANGELOG.md` - Update history

## 🚀 Next Steps

1. ✅ Explore semua fitur
2. ✅ Coba berbagai pertanyaan
3. ✅ Customize data di `script.js`
4. ✅ Adjust config di `config.js`
5. ✅ Integrasikan dengan sensor real

## 💡 Tips

- Use **dark mode** (toggle 🌙 di header)
- Try **random questions** di test console
- Read **AI responses carefully** untuk insight
- **Refresh laporan** untuk analisis terbaru

---

**Butuh bantuan?** Baca `USAGE_GUIDE.md` 📖

**Tim Pandriya - Innovillage 6th** 🌿
