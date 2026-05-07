# 📋 Dokumen Serah Terima — Edu Game
**Versi:** 1.0  
**Tanggal:** 7 Mei 2026  
**Status:** Live & berjalan

---

## 🎯 Ringkasan Project

Aplikasi web gamifikasi pendidikan untuk siswa Sekolah Dasar. Anak-anak belajar mata pelajaran sambil membangun karakter RPG, mengumpulkan XP, menyelesaikan quest harian, dan bersaing di leaderboard kelas.

**Link publik:** https://edu-game-pink.vercel.app  
**Repository:** https://github.com/siswacerdas/edu-game

---

## 🧱 Teknologi

| Komponen | Teknologi |
|---|---|
| Frontend | React.js + Vite |
| Database | Firebase Firestore |
| Auth | Firebase Authentication (Email/Password) |
| Hosting | Vercel (auto-deploy dari GitHub) |
| Version Control | GitHub |
| Node.js | v24.15.0 |
| npm | v11.12.1 |

---

## 📁 Struktur Folder

```
edu-game/
├── public/
├── src/
│   ├── firebase/
│   │   └── config.js          ← koneksi Firebase
│   ├── data/
│   │   ├── soal.js            ← 5 soal pilihan ganda
│   │   ├── level.js           ← 7 tingkat level + fungsi hitungLevel()
│   │   ├── karakter.js        ← 3 karakter (Pejuang, Penyihir, Pemanah)
│   │   ├── item.js            ← 5 item reward
│   │   └── quest.js           ← 4 quest harian
│   ├── pages/
│   │   ├── Register.jsx       ← halaman daftar akun
│   │   ├── Login.jsx          ← halaman login
│   │   ├── Quiz.jsx           ← halaman soal pilihan ganda
│   │   ├── Karakter.jsx       ← halaman avatar & stat karakter
│   │   ├── Quest.jsx          ← halaman quest harian
│   │   └── Leaderboard.jsx    ← papan peringkat top 10
│   ├── App.jsx                ← komponen utama + navigasi tab
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── CHANGELOG.md
```

---

## 🗄️ Struktur Database Firestore

### Koleksi `siswa`
```
siswa/{uid}
├── nama: string
├── email: string
├── xp: number
├── level: number
├── karakter: string ("pejuang" | "penyihir" | "pemanah")
├── quizSelesai: number
├── item: array of string (id item yang dimiliki)
└── progressHarian:
    ├── tanggal: string (new Date().toDateString())
    ├── quizCount: number
    ├── perfectCount: number
    └── questSelesai: array of string (id quest selesai hari ini)
```

### Koleksi `hasil_quiz`
```
hasil_quiz/{auto-id}
├── siswaId: string (uid)
├── tanggal: timestamp
├── totalSoal: number
├── totalBenar: number
├── xpDidapat: number
└── detail: array of { soalId, pertanyaan, dijawab, benar }
```

---

## ⚙️ Fitur yang Sudah Berjalan

| Fitur | Status |
|---|---|
| Daftar akun baru | ✅ |
| Login / logout | ✅ |
| Profil siswa tersimpan di Firestore | ✅ |
| Soal pilihan ganda (5 soal) | ✅ |
| Hasil quiz tersimpan di Firestore | ✅ |
| Sistem XP (10 XP per jawaban benar) | ✅ |
| Progress bar XP | ✅ |
| 7 tingkat level dengan nama RPG | ✅ |
| Naik level otomatis | ✅ |
| Notifikasi naik level | ✅ |
| 3 karakter (Pejuang, Penyihir, Pemanah) | ✅ |
| Stat karakter (Kekuatan, Kecerdasan, Ketangkasan) | ✅ |
| 5 item reward | ✅ |
| Bonus stat dari item | ✅ |
| 4 quest harian | ✅ |
| Reset quest otomatis tiap hari | ✅ |
| Reward XP dari quest | ✅ |
| Leaderboard top 10 | ✅ |
| Deploy ke Vercel | ✅ |

---

## 📊 Data Game

### Level
| Level | Nama | XP Minimum |
|---|---|---|
| 1 | Petualang Baru | 0 |
| 2 | Pejuang Muda | 50 |
| 3 | Ksatria Berlatih | 120 |
| 4 | Ksatria Sejati | 220 |
| 5 | Pahlawan Desa | 350 |
| 6 | Pahlawan Negeri | 520 |
| 7 | Legenda Sekolah | 730 |

### Item
| Item | Emoji | Syarat Level | Syarat Quiz |
|---|---|---|---|
| Pedang Kayu | 🗡️ | 1 | 1 |
| Topi Sihir | 🎩 | 2 | 3 |
| Sepatu Angin | 👟 | 2 | 5 |
| Perisai Besi | 🛡️ | 3 | 8 |
| Mahkota Bijak | 👑 | 5 | 15 |

### Quest Harian
| Quest | Syarat | Reward |
|---|---|---|
| Langkah Pertama | 1 quiz hari ini | +20 XP |
| Rajin Belajar | 3 quiz hari ini | +50 XP |
| Nilai Sempurna | Semua soal benar | +30 XP |
| Juara Belajar | 5 quiz hari ini | +100 XP |

---

## 🚀 Cara Menjalankan Lokal

```bash
# Clone repository
git clone https://github.com/siswacerdas/edu-game.git
cd edu-game

# Install dependencies
npm install

# Jalankan di browser (http://localhost:5173)
npm run dev
```

### Cara Push Perubahan ke GitHub (dan auto-deploy ke Vercel)
```bash
git add .
git commit -m "deskripsi perubahan"
git push
```

---

## 🔧 Catatan Teknis Penting

- Project menggunakan **Vite** (bukan Create React App) karena kompatibilitas dengan Node v24
- Firebase config disimpan langsung di `src/firebase/config.js` — **jangan dibagikan**
- Vercel auto-deploy setiap kali ada push ke branch `main`
- Firestore berjalan dalam **test mode** — perlu diperbarui rules-nya sebelum produksi penuh
- Styling menggunakan **inline CSS** (belum ada Tailwind/library CSS)

---

## 💡 Rencana Pengembangan Selanjutnya (ver.1.x)

| Versi | Ide Fitur |
|---|---|
| ver.1.1 | Tambah mata pelajaran baru (Matematika, IPA, IPS) |
| ver.1.2 | Polish UI — warna cerah, font ramah anak, animasi |
| ver.1.3 | Pilih karakter saat daftar (sekarang default "pejuang") |
| ver.1.4 | Dashboard guru untuk memantau progress siswa |
| ver.1.5 | Mode battle soal antar siswa |
| ver.1.6 | Sistem guild / kelompok belajar |
| ver.1.7 | Firestore security rules untuk keamanan data |
| ver.2.0 | Aplikasi mobile (React Native) |

---

## 👤 Profil Pengembang

**Nama:** Arif Azwar Anas  
**Email:** arif.azwar79@gmail.com  
**GitHub:** github.com/siswacerdas  
**Catatan:** Pemula yang belajar membuat program — project dikerjakan bertahap, pelan, cermat, dan konsisten.

---

*Dokumen ini dibuat untuk memudahkan melanjutkan project di percakapan baru.*  
*Tunjukkan dokumen ini kepada Claude di awal percakapan baru untuk konteks penuh.*
