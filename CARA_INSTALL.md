# 🚀 Cara Install & Menjalankan Pandriya

## 📋 Prerequisites
- Node.js (versi 14 atau lebih baru)
- npm (biasanya sudah terinstall bersama Node.js)

## ⚙️ Langkah Instalasi

### 1. Install Dependencies
Buka terminal di folder Pandriya dan jalankan:
```bash
npm install
```

### 2. Konfigurasi API Key
File `.env` sudah dibuat dengan API key Anda. Jika perlu update:
```
GEMINI_API_KEY=your_api_key_here
PORT=3000
```

### 3. Jalankan Server
```bash
npm start
```

Atau untuk development dengan auto-reload:
```bash
npm run dev
```

### 4. Akses Dashboard
Buka browser dan kunjungi:
- **Dashboard**: http://localhost:3000/Index.html
- **API Health Check**: http://localhost:3000/api/health

## 🎯 API Endpoints

### GET /api/health
Cek status server dan konfigurasi

### GET /api/dashboard
Ambil data dashboard

### POST /api/ai/report
Generate laporan AI

### POST /api/ai/chat
Request:
```json
{
  "message": "Bagaimana kondisi kebun saya?"
}
```

## 🔧 Troubleshooting

### Server tidak bisa start
- Pastikan port 3000 tidak digunakan aplikasi lain
- Cek apakah Node.js sudah terinstall: `node --version`

### AI tidak merespons
- Pastikan `.env` berisi GEMINI_API_KEY yang valid
- Cek Console browser untuk error
- Verifikasi API key di Google AI Studio

## 📁 Struktur File
```
Pandriya/
├── .env              # Kredensial (JANGAN commit!)
├── server.js         # Backend Node.js
├── package.json      # Dependencies
├── Index.html        # Frontend
├── script.js         # Frontend logic
├── styles.css        # Styling
└── README.md         # Dokumentasi
```

## 🌿 Tim Pandriya - Innovillage 6th
