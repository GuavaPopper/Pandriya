# 🌿 Pandriya - Smart IoT Farming Dashboard

![Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

# 🌿 Pandriya - Dashboard IoT Smart Farming

Solusi IoT & Umpan Alami untuk melindungi panen jambu kristal dari serangan lalat buah di Desa Rasau Jaya Tiga.

## 🚀 Fitur Utama

- **Dashboard Real-time**: Monitoring status perangkap dan data lalat buah
- **🤖 Laporan AI**: Analisis otomatis menggunakan Google Gemini AI
- **💬 Chatbot AI**: Asisten virtual yang menjawab pertanyaan petani
- **📊 Visualisasi Data**: Grafik tren lalat buah terdeteksi
- **🌓 Dark Mode**: Tampilan gelap untuk kenyamanan mata
- **📱 Responsive Design**: Optimal di semua perangkat

## 🔧 Teknologi yang Digunakan

- HTML5, CSS3, JavaScript (Vanilla)
- Chart.js untuk visualisasi data
- Google Gemini AI API untuk fitur AI
- Design modern dengan animasi interaktif

## 📝 Setup & Instalasi

### 1. Clone/Download Repository
```bash
git clone [repository-url]
cd Pandriya
```

### 2. Konfigurasi API Key
File `.env` dan `env.js` untuk keamanan kredensial:

**Setup API Key (PENTING!):**
```bash
# 1. Copy template
Copy-Item env.example.js env.js  # Windows
# atau: cp env.example.js env.js  # macOS/Linux

# 2. Edit env.js dan ganti YOUR_API_KEY_HERE dengan API key Anda
```

**File `env.js` contoh:**
```javascript
const ENV = {
    GEMINI_API_KEY: 'YOUR_ACTUAL_API_KEY_HERE'
};
```

**⚠️ PENTING:** 
- File `env.js` sudah ditambahkan ke `.gitignore`
- JANGAN commit file `env.js` ke repository
- Untuk detail lengkap, baca **[ENV_SETUP.md](ENV_SETUP.md)**
- Gunakan `env.example.js` sebagai template

### 3. Jalankan Aplikasi
Buka file `Index.html` di browser Anda, atau gunakan live server:

**Menggunakan Python:**
```bash
python -m http.server 8000
```
Kemudian buka `http://localhost:8000`

**Menggunakan Node.js (http-server):**
```bash
npx http-server
```

**Menggunakan VS Code Live Server:**
- Install extension "Live Server"
- Klik kanan pada `Index.html`
- Pilih "Open with Live Server"

## 🤖 Fitur AI

### Laporan AI
- Menganalisis data sensor secara otomatis
- Memberikan insight tentang pola serangan lalat buah
- Memberikan rekomendasi tindakan untuk petani
- Bisa di-refresh untuk mendapatkan analisis terbaru

### Chatbot AI Pandriya
- Menjawab pertanyaan petani tentang sistem monitoring
- Memberikan informasi tentang status umpan dan perangkap
- Konteks-aware (memahami data dashboard saat ini)
- Responsif dan ramah pengguna

### Cara Kerja AI
1. Data dashboard (jumlah lalat buah, status umpan, dll) dijadikan konteks
2. Pertanyaan pengguna dikirim ke Google Gemini API
3. AI menganalisis dan memberikan jawaban yang relevan
4. Respons ditampilkan secara real-time di interface

## 📊 Data Mockup/Hardcoded

Dashboard menggunakan data simulasi untuk demo:
- **Farmer**: Pak Budi, Kebun 2 hektar
- **Perangkap**: 5 unit (semua aktif)
- **Lalat Buah 24 jam**: 127 ekor
- **Data 7 hari**: [65, 59, 80, 81, 56, 55, 127]
- **Status Umpan**: 80% (3 hari lagi)
- **Alert**: Peningkatan aktivitas 30% di Area Utara

Data ini dapat diganti dengan data real dari sensor IoT.

## 🎨 Kustomisasi

### Mengubah Data Dashboard
Edit variabel `DASHBOARD_DATA` di `script.js`:
```javascript
const DASHBOARD_DATA = {
    farmer: {
        name: "Nama Petani",
        farmSize: 2,
        location: "Lokasi Kebun"
    },
    // ... data lainnya
};
```

### Mengubah Tema Warna
Edit variabel CSS di `styles.css`:
```css
:root {
    --primary: #388E3C;
    --secondary: #FB8C00;
    /* ... warna lainnya */
}
```

## 🔒 Keamanan

- API key disimpan di file `.env` (jangan di-commit)
- Untuk production, gunakan environment variables dari server
- Implementasikan rate limiting untuk API calls
- Validasi input pengguna di chatbot

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🤝 Kontribusi

Proyek ini dibuat untuk **Innovillage 6th** oleh Tim Pandriya.

## 📄 Lisensi

© 2025 Tim Pandriya - Innovillage 6th. All rights reserved.

## 📞 Kontak

Untuk pertanyaan atau feedback, silakan hubungi tim Pandriya.

---

**Made with 💚 for petani Desa Rasau Jaya Tiga**

## 📋 Deskripsi

**Pandriya** adalah proyek inovatif dari Tim Innovillage 6th yang mengintegrasikan teknologi IoT, AI, dan umpan organik untuk mengatasi masalah serangan lalat buah pada perkebunan jambu kristal. Dashboard web interaktif ini menyediakan monitoring real-time, analisis AI, dan chatbot untuk membantu petani.

## ✨ Fitur Utama

### 🎯 Teknologi Utama
- **Perangkat Keras IoT**: Perangkap pintar dengan sensor real-time
- **Tenaga Surya**: Sistem mandiri energi untuk area terpencil
- **Umpan Alami**: Ekstrak Daun Melada (Piper Colubrinum Link) yang ramah lingkungan
- **Dashboard Terpersonalisasi**: Setiap petani mendapat dashboard khusus
- **AI Analytics**: Laporan otomatis dan rekomendasi cerdas
- **Chatbot AI**: Asisten virtual untuk menjawab pertanyaan petani

### 🎨 Fitur Web
- ✅ **Responsive Design**: Tampilan optimal di desktop, tablet, dan mobile
- ✅ **Dark Mode**: Mode gelap untuk kenyamanan mata
- ✅ **Animasi Smooth**: Transisi dan animasi yang halus dan modern
- ✅ **Interactive Charts**: Visualisasi data dengan Chart.js
- ✅ **Scroll Animations**: Elemen muncul saat discroll
- ✅ **Mobile Menu**: Navigasi mobile yang user-friendly
- ✅ **Tab System**: Navigasi konten dengan sistem tab
- ✅ **Glass Morphism**: Efek kaca modern pada card
- ✅ **Gradient Backgrounds**: Background bergradien yang menarik

## 🚀 Cara Menggunakan

### Metode 1: Langsung Buka di Browser (Termudah)

1. **Download atau clone repository ini**
   ```bash
   git clone https://github.com/your-username/pandriya-dashboard.git
   cd pandriya-dashboard
   ```

2. **Buka file `Index.html` langsung di browser**
   - Klik kanan pada file `Index.html`
   - Pilih "Open with" → Browser favorit Anda (Chrome, Firefox, Edge, dll)
   - Atau cukup drag & drop file `Index.html` ke browser

### Metode 2: Menggunakan Live Server (Untuk Development)

Jika Anda menggunakan VS Code:

1. **Install ekstensi "Live Server"** dari VS Code Marketplace
2. **Klik kanan pada `Index.html`** → "Open with Live Server"
3. **Browser akan otomatis membuka** dengan live reload

### Metode 3: Menggunakan Local Server

Dengan Python:
```bash
# Python 3
python -m http.server 8000

# Buka browser ke http://localhost:8000
```

Dengan Node.js:
```bash
# Install http-server global
npm install -g http-server

# Jalankan server
http-server -p 8000

# Buka browser ke http://localhost:8000
```

## 📁 Struktur File

```
Pandriya/
│
├── Index.html          # File HTML utama
├── styles.css          # Stylesheet kustom dengan animasi dan efek modern
├── script.js           # JavaScript untuk interaktivitas
└── README.md          # Dokumentasi (file ini)
```

## 🎨 Teknologi yang Digunakan

- **HTML5**: Struktur semantik dan accessibility
- **CSS3**: 
  - Custom properties (CSS Variables)
  - Flexbox & Grid Layout
  - Animations & Transitions
  - Media Queries (Responsive)
  - Glass Morphism Effects
- **JavaScript (Vanilla)**: 
  - DOM Manipulation
  - Event Handling
  - Intersection Observer API
  - Local Storage API
- **Chart.js**: Visualisasi data interaktif
- **Google Fonts**: Font Inter untuk tipografi modern

## 🌟 Fitur Interaktif

### 1. **Dark Mode Toggle** 🌙
- Klik icon bulan/matahari di navigasi
- Preferensi tersimpan di Local Storage
- Transisi smooth antar mode

### 2. **Scroll Animations** ✨
- Elemen muncul dengan animasi saat discroll
- Menggunakan Intersection Observer API
- Performa optimal tanpa lag

### 3. **Tab Navigation** 📑
- Perangkat Keras vs Perangkat Lunak
- Transisi konten yang smooth
- State management yang efisien

### 4. **Interactive Chart** 📊
- Hover untuk detail data
- Animasi loading yang smooth
- Responsive di semua ukuran layar

### 5. **Mobile Menu** 📱
- Hamburger menu untuk mobile
- Close on click outside
- Smooth slide animation

### 6. **Smooth Scroll** 🎯
- Navigasi antar section yang halus
- Offset untuk fixed header
- Compatible dengan semua browser modern

## 🎯 Browser Support

✅ Chrome/Edge (versi terbaru)  
✅ Firefox (versi terbaru)  
✅ Safari (versi terbaru)  
✅ Opera (versi terbaru)  

> **Catatan**: Untuk pengalaman terbaik, gunakan browser modern dengan JavaScript enabled.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Palette

```css
Primary Green:   #388E3C (Hijau daun)
Primary Dark:    #1B5E20
Primary Light:   #EBF5EB

Secondary Orange: #FB8C00
Secondary Dark:   #E65100
Secondary Light:  #FFF3E0

Neutral Dark:    #212121
Neutral:         #757575
Neutral Light:   #F5F5F5
```

## 🔧 Customization

### Mengubah Warna
Edit file `styles.css` pada bagian `:root` CSS variables:
```css
:root {
    --primary: #388E3C;
    --primary-dark: #1B5E20;
    /* ... */
}
```

### Mengubah Data Chart
Edit file `script.js` pada fungsi `initChart()`:
```javascript
data: {
    labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
    datasets: [{
        data: [65, 59, 80, 81, 56, 55, 127], // Ubah data di sini
        // ...
    }]
}
```

## 🐛 Troubleshooting

### Chart tidak muncul?
- Pastikan koneksi internet aktif (Chart.js dimuat dari CDN)
- Cek console browser untuk error
- Pastikan JavaScript diaktifkan

### Animasi tidak smooth?
- Update browser ke versi terbaru
- Disable browser extensions yang conflict
- Coba mode incognito

### Dark mode tidak tersimpan?
- Pastikan browser mendukung Local Storage
- Cek privacy settings browser (cookies/storage)

## 👥 Tim Pandriya

**Innovillage 6th** - Memberdayakan petani dengan teknologi

## 📄 Lisensi

Copyright © 2025 Tim Pandriya - Innovillage 6th  
Dibuat untuk memberdayakan petani Desa Rasau Jaya Tiga

## 🤝 Kontribusi

Proyek ini dibuat untuk kompetisi Innovillage. Untuk pertanyaan atau saran, silakan hubungi tim kami.

---

**Dibuat dengan ❤️ untuk petani Indonesia** 🇮🇩
#   P a n d r i y a B i a s a  
 