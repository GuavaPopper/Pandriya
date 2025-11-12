# 🚀 Panduan Menjalankan Dashboard Pandriya

## ⚡ Quick Start (Pilih Salah Satu)

### Cara 1: Langsung Buka di Browser (TERMUDAH! ⭐)
```
1. Buka File Explorer/Finder
2. Navigate ke folder: C:\Users\User\Downloads\Pandriya
3. Double-click file: Index.html
4. ✅ Dashboard langsung terbuka di browser default!
```

**Kelebihan:** 
- Paling cepat dan mudah
- Tidak perlu install apapun
- Langsung jalan!

---

### Cara 2: Menggunakan Node.js http-server (Yang Anda Pakai Sekarang)

**Sudah Running!** ✅ Terminal Anda sudah menjalankan server.

```bash
# Terminal sudah running:
npx http-server

# Sekarang buka browser ke:
http://localhost:8080/Index.html
```

**Untuk menjalankan lagi di lain waktu:**
```bash
# 1. Buka terminal/PowerShell di folder Pandriya
cd C:\Users\User\Downloads\Pandriya

# 2. Jalankan server
npx http-server

# 3. Buka browser ke URL yang ditampilkan
```

**Tips:**
- Port default: 8080
- Untuk stop server: Tekan `Ctrl + C`
- Untuk custom port: `npx http-server -p 3000`

---

### Cara 3: Menggunakan Python (Jika Ada Python Installed)

```bash
# Di PowerShell/Terminal
cd C:\Users\User\Downloads\Pandriya

# Python 3.x
python -m http.server 8000

# Buka browser ke:
http://localhost:8000/Index.html
```

---

### Cara 4: Menggunakan VS Code Live Server (Untuk Developer)

**Langkah-langkah:**

1. **Install VS Code** (jika belum ada)
   - Download: https://code.visualstudio.com/

2. **Install Extension "Live Server"**
   ```
   - Buka VS Code
   - Klik Extensions (Ctrl+Shift+X)
   - Cari: "Live Server"
   - Install yang dari "Ritwick Dey"
   ```

3. **Buka Folder Pandriya di VS Code**
   ```
   - File → Open Folder
   - Pilih: C:\Users\User\Downloads\Pandriya
   ```

4. **Start Live Server**
   ```
   - Klik kanan pada Index.html
   - Pilih: "Open with Live Server"
   - ✅ Browser otomatis terbuka!
   ```

**Kelebihan:**
- Auto-reload saat edit file
- Port biasanya: 5500
- Perfect untuk development

---

### Cara 5: Menggunakan PHP (Jika Ada PHP Installed)

```bash
# Di terminal
cd C:\Users\User\Downloads\Pandriya
php -S localhost:8000

# Buka browser ke:
http://localhost:8000/Index.html
```

---

## 🔧 Setup Environment (PENTING SEBELUM JALANKAN!)

### ⚠️ LANGKAH WAJIB: Setup API Key

**Sebelum dashboard berfungsi penuh, setup API key dulu:**

```bash
# 1. Copy template
Copy-Item env.example.js env.js

# 2. Edit env.js (buka dengan text editor)
# Ganti YOUR_API_KEY_HERE dengan API key Anda

# File env.js harus berisi:
const ENV = {
    GEMINI_API_KEY: 'AIzaSyBOW6ZronM7DmumnlR9WZczxDjq5czTONw'
};
```

**Atau manual:**
1. Copy file `env.example.js`
2. Rename menjadi `env.js`
3. Edit dengan Notepad/VS Code
4. Ganti `YOUR_API_KEY_HERE` dengan API key

---

## 📋 Checklist Sebelum Jalankan

- [ ] File `env.js` sudah dibuat dari `env.example.js`
- [ ] API key sudah diisi di `env.js`
- [ ] Browser modern (Chrome/Firefox/Edge) installed
- [ ] JavaScript enabled di browser
- [ ] Internet connection aktif (untuk Chart.js dan Gemini API)

---

## 🎯 Langkah Lengkap dari Awal

### Untuk Pengguna Baru:

```bash
# 1. Download/Clone repository
# (Sudah done di: C:\Users\User\Downloads\Pandriya)

# 2. Setup environment
cd C:\Users\User\Downloads\Pandriya
Copy-Item env.example.js env.js
# Edit env.js dengan text editor

# 3. Jalankan (pilih salah satu)

# Opsi A: Double-click Index.html ⭐ TERMUDAH

# Opsi B: Node.js
npx http-server
# Buka: http://localhost:8080/Index.html

# Opsi C: Python
python -m http.server 8000
# Buka: http://localhost:8000/Index.html

# 4. Buka di browser
# Dashboard siap digunakan! 🎉
```

---

## 🌐 URLs Berdasarkan Method

| Method | Default URL |
|--------|------------|
| Double-click | `file:///C:/Users/User/Downloads/Pandriya/Index.html` |
| http-server | `http://localhost:8080/Index.html` |
| Python | `http://localhost:8000/Index.html` |
| VS Code Live Server | `http://127.0.0.1:5500/Index.html` |
| PHP | `http://localhost:8000/Index.html` |

---

## ✅ Cara Tahu Dashboard Sudah Jalan

Buka browser, Anda harus melihat:

1. ✅ **Header** dengan logo "🌿 Pandriya"
2. ✅ **Hero section** dengan judul besar
3. ✅ **Navigation menu** berfungsi
4. ✅ **Scroll ke "Dashboard Demo"** - ada:
   - Status perangkap: AKTIF
   - Lalat buah: 127
   - Status umpan: 80%
   - Grafik bar chart
   - **Laporan AI** (auto-generate)
   - **Chatbot AI** (bisa diketik)

---

## 🧪 Testing Fitur AI

Setelah dashboard terbuka:

### Test Laporan AI:
1. Scroll ke bagian "Dashboard Demo"
2. Cari card "🤖 Laporan AI"
3. Tunggu 2-5 detik (loading)
4. ✅ Laporan muncul dengan analisis
5. Klik "🔄 Refresh Laporan" untuk generate ulang

### Test Chatbot:
1. Di bagian "💬 Chatbot AI Pandriya"
2. Ketik pertanyaan, contoh:
   - "Kapan harus ganti umpan?"
   - "Berapa lalat buah hari ini?"
3. Tekan Enter atau klik "Kirim"
4. ✅ AI akan merespons dalam 2-5 detik

---

## 🐛 Troubleshooting

### ❌ Server tidak jalan
**Solusi:**
```bash
# Pastikan Node.js installed
node --version

# Jika belum install, download:
# https://nodejs.org/

# Atau gunakan cara 1: Double-click Index.html
```

### ❌ Laporan AI tidak muncul
**Solusi:**
1. Cek file `env.js` sudah ada
2. Cek API key valid
3. Buka Developer Console (F12)
4. Lihat error message
5. Refresh browser (Ctrl+F5)

### ❌ Chart tidak muncul
**Solusi:**
- Pastikan internet aktif (Chart.js dari CDN)
- Refresh halaman
- Clear cache browser

### ❌ Port sudah digunakan
**Solusi:**
```bash
# Gunakan port lain
npx http-server -p 3000

# Atau matikan aplikasi yang pakai port tersebut
```

---

## 💡 Tips

1. **Untuk Development:**
   - Gunakan VS Code Live Server (auto-reload)

2. **Untuk Demo/Testing:**
   - Double-click Index.html (paling cepat)

3. **Untuk Production:**
   - Deploy ke Vercel/Netlify/GitHub Pages

4. **Dark Mode:**
   - Klik icon 🌙 di header
   - Preferensi tersimpan otomatis

5. **Mobile Testing:**
   - Buka di smartphone dengan URL network:
   ```
   http://192.168.x.x:8080/Index.html
   ```
   (Ganti dengan IP lokal Anda)

---

## 🚀 Next Steps

Setelah dashboard jalan:

1. ✅ Explore semua fitur
2. ✅ Test chatbot dengan berbagai pertanyaan
3. ✅ Coba dark mode
4. ✅ Test di mobile (responsive)
5. ✅ Baca dokumentasi lengkap:
   - `USAGE_GUIDE.md` - Cara pakai
   - `AI_INTEGRATION.md` - Detail AI
   - `ENV_SETUP.md` - Setup environment

---

## 📞 Butuh Bantuan?

- 📖 Baca: `QUICKSTART.md`
- 🔐 Setup: `ENV_SETUP.md`
- 📚 Lengkap: `README.md`
- 🧪 Testing: Buka `test-ai.html`

---

**Selamat mencoba! Dashboard Pandriya siap membantu petani! 🌿**

**Tim Pandriya - Innovillage 6th** 🎉
