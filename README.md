# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🎮 Edu Game — Belajar Seru ala RPG

Aplikasi web gamifikasi pendidikan untuk siswa Sekolah Dasar.  
Anak-anak belajar mata pelajaran sambil membangun karakter, mengumpulkan XP, menyelesaikan quest, dan bersaing di leaderboard kelas.

---

## 🎯 Tujuan Project

Membujuk anak SD untuk belajar dengan mengemas materi pelajaran dalam elemen game RPG/strategi — karakter, level, item, dan misi harian — sehingga belajar terasa seperti bermain.

---

## 🗺️ Peta Jalan Pengembangan

| Fase | Deskripsi | Status |
|------|-----------|--------|
| Fase 1 | Setup lingkungan kerja (GitHub, Firebase, VS Code, React) | 🔄 Sedang berjalan |
| Fase 2 | Login & profil siswa | ⏳ Menunggu |
| Fase 3 | Modul belajar pertama (soal pilihan ganda) | ⏳ Menunggu |
| Fase 4 | Sistem XP & level | ⏳ Menunggu |
| Fase 5 | Elemen RPG (karakter, stat, item) | ⏳ Menunggu |
| Fase 6 | Quest harian & leaderboard | ⏳ Menunggu |
| Fase 7 | Polish desain & deploy ke Vercel | ⏳ Menunggu |

---

## 🧱 Teknologi yang Digunakan

- **Frontend:** React.js
- **Database & Auth:** Firebase (Firestore + Authentication)
- **Hosting:** Vercel
- **Version Control:** GitHub

---

## 🚀 Cara Menjalankan di Lokal

```bash
# Clone repository
git clone https://github.com/siswacerdas/edu-game.git

# Masuk ke folder project
cd edu-game

# Install dependencies
npm install

# Jalankan di browser
npm start
```

> Pastikan sudah mengisi konfigurasi Firebase di file `.env` sebelum menjalankan.

---

## 📁 Struktur Folder

```
edu-game/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── firebase/
│   └── App.js
├── .env
├── package.json
├── CHANGELOG.md
└── README.md
```

---

## 📜 Riwayat Perubahan

Lihat [CHANGELOG.md](./CHANGELOG.md) untuk rekaman lengkap perjalanan pengembangan project ini.

---

## 🤝 Tentang Project Ini

Project ini dikerjakan secara bertahap — satu fase selesai dan teruji dulu sebelum lanjut ke fase berikutnya.  
Dibangun dengan prinsip: **pelan, cermat, dan konsisten.**
