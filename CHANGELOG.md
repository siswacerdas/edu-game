# Changelog — Edu Game

Rekaman perjalanan pengembangan project ini, dari hari pertama hingga selesai.  
Ditulis dengan prinsip: **pelan, cermat, dan konsisten.**

Format versi: `ver.X.Y` — X adalah versi besar (milestone fase), Y adalah pembaruan kecil.

---

## [ver.1.0] — Project Selesai 🎉
**Tanggal:** 7 Mei 2026  
**Fase:** Fase 7 — Deploy & polish  
**Status:** ✅ Live

Versi pertama yang lengkap. Semua 7 fase selesai dan teruji. Website bisa diakses publik.

### Dicapai di ver.1.0
- Semua kode berhasil di-push ke GitHub
- Website berhasil di-deploy ke Vercel
- Link publik: https://edu-game-pink.vercel.app
- Website bisa diakses dari HP dan komputer
- Semua fitur berjalan stabil: login, quiz, XP, level, karakter, item, quest, leaderboard
- Setiap push ke GitHub otomatis update website di Vercel

### Ringkasan perjalanan ver.0 → ver.1.0
| Fase | Versi | Pencapaian |
|---|---|---|
| Fase 1 | ver.0.1 | Setup GitHub, Firebase, VS Code, React+Vite |
| Fase 2 | ver.0.2 | Login, daftar akun, profil siswa di Firestore |
| Fase 3 | ver.0.3 | Soal pilihan ganda, hasil quiz tersimpan |
| Fase 4 | ver.0.4 | Sistem XP, progress bar, naik level otomatis |
| Fase 5 | ver.0.5 | Karakter RPG, stat, item reward |
| Fase 6 | ver.0.6 | Quest harian, leaderboard |
| Fase 7 | ver.1.0 | Deploy Vercel, website live |

---

## [ver.0.6] — Fase 6 selesai ✅
**Fase:** Fase 6 — Quest harian & leaderboard

### Dicapai
- Data quest dibuat di `src/data/quest.js` (4 quest harian)
- Halaman Quest menampilkan progress bar setiap quest
- Quest selesai otomatis terdeteksi setelah quiz
- Reward XP dari quest diberikan dan tersimpan ke Firestore
- Progress quest reset otomatis setiap hari baru
- Halaman Leaderboard menampilkan top 10 siswa berdasarkan XP
- Posisi pemain sendiri ditandai khusus di leaderboard
- Notifikasi oranye muncul saat quest selesai

---

## [ver.0.5] — Fase 5 selesai ✅
**Fase:** Fase 5 — Elemen RPG (karakter & item)

### Dicapai
- Data karakter dibuat di `src/data/karakter.js` (Pejuang, Penyihir, Pemanah)
- Data item dibuat di `src/data/item.js` (5 item dengan syarat level & quiz)
- Halaman Karakter menampilkan avatar emoji, deskripsi, dan stat
- Progress bar untuk setiap stat (Kekuatan, Kecerdasan, Ketangkasan)
- Item reward diberikan otomatis setelah quiz berdasarkan syarat
- Bonus stat dari item tampil di halaman Karakter
- Notifikasi hijau muncul saat mendapat item baru
- Penghitung quiz diselesaikan tersimpan di Firestore

---

## [ver.0.4] — Fase 4 selesai ✅
**Fase:** Fase 4 — Sistem XP & level

### Dicapai
- Logika perhitungan level dibuat di `src/data/level.js`
- 7 tingkat level dengan nama RPG tersedia
- Progress bar XP tampil di halaman profil
- Level naik otomatis setelah XP cukup
- Notifikasi naik level muncul selama 5 detik
- Data level tersimpan ke Firestore

---

## [ver.0.3] — Fase 3 selesai ✅
**Fase:** Fase 3 — Modul belajar pertama

### Dicapai
- Data soal pilihan ganda dibuat di `src/data/soal.js`
- Halaman Quiz berfungsi dengan navigasi soal per soal
- Jawaban tersimpan ke koleksi `hasil_quiz` di Firestore
- XP siswa bertambah otomatis setelah quiz selesai
- Profil siswa terupdate langsung setelah quiz tanpa perlu reload

---

## [ver.0.2] — Fase 2 selesai ✅
**Fase:** Fase 2 — Login & profil siswa

### Dicapai
- Firebase Authentication berhasil diintegrasikan
- Halaman daftar akun berfungsi dan menyimpan profil ke Firestore
- Halaman login berfungsi dengan email & password
- Profil siswa (nama, karakter, XP, level) tampil setelah login
- Koneksi ke Firestore berhasil diuji dan tampil di browser
- Tombol logout berfungsi

---

## [ver.0.1] — Fase 1 selesai ✅
**Fase:** Fase 1 — Setup lingkungan kerja

### Dicapai
- Akun GitHub dibuat dan repository `edu-game` siap
- VS Code terinstall dengan extension pendukung
- Project Firebase dibuat dengan Firestore & Authentication aktif
- React+Vite berhasil dijalankan di browser lokal
- Firebase berhasil diinstall ke project Vite
- File `src/firebase/config.js` dibuat dan terkonfigurasi

---

## [ver.0] — Awal Perjalanan
**Tanggal:** 7 Mei 2026

### Ditambahkan
- `README.md` — deskripsi project, peta jalan, dan cara menjalankan
- `index.html` — halaman placeholder
- `CHANGELOG.md` — file ini, rekaman perjalanan project

> Project ini dimulai oleh seseorang yang baru belajar membuat program.
> Setiap langkah dikerjakan pelan-pelan, satu fase selesai sebelum lanjut ke berikutnya.
> Tidak ada yang dilewati. Tidak ada yang terburu-buru.

---

## Rencana ver.1.x ke atas

| Versi | Rencana Fitur |
|---|---|
| ver.1.1 | Tambah mata pelajaran baru (Matematika, IPA, IPS) |
| ver.1.2 | Polish UI — warna cerah, font ramah anak, animasi |
| ver.1.3 | Pilih karakter saat daftar akun |
| ver.1.4 | Dashboard guru untuk memantau progress siswa |
| ver.1.5 | Mode battle soal antar siswa |
| ver.1.6 | Sistem guild / kelompok belajar |
| ver.1.7 | Firestore security rules untuk keamanan data |
| ver.2.0 | Aplikasi mobile (React Native) |

---

*Changelog ini diperbarui setiap kali ada kemajuan nyata dalam pengembangan.*
