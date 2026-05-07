# Changelog — Edu Game

Rekaman perjalanan pengembangan project ini, dari hari pertama hingga selesai.  
Ditulis dengan prinsip: **pelan, cermat, dan konsisten.**

Format versi: `ver.X.Y` — X adalah versi besar (milestone fase), Y adalah pembaruan kecil.

---

## [ver.0] — Awal Perjalanan

**Status:** 🔄 Sedang berjalan  
**Fase:** Fase 1 — Setup lingkungan kerja

Ini adalah titik nol. Project baru lahir. Belum ada fitur, belum ada kode yang berjalan — hanya struktur awal dan dokumentasi sebagai fondasi.

### Ditambahkan
- `README.md` — deskripsi project, peta jalan, dan cara menjalankan
- `index.html` — halaman placeholder yang menampilkan progress pengembangan
- `CHANGELOG.md` — file ini, rekaman perjalanan project

### Catatan
> Project ini dimulai oleh seseorang yang baru belajar membuat program.  
> Setiap langkah dikerjakan pelan-pelan, satu fase selesai sebelum lanjut ke berikutnya.  
> Tidak ada yang dilewati. Tidak ada yang terburu-buru.

---

## [ver.0.1] — Fase 1 selesai ✅

**Fase:** Fase 1 — Setup lingkungan kerja  
React pertama berhasil dijalankan di browser lokal.

### Dicapai
- Akun GitHub dibuat dan repository `edu-game` siap
- VS Code terinstall dengan extension pendukung
- Project Firebase dibuat dengan Firestore & Authentication aktif
- React berhasil dijalankan di browser lokal

---

## [ver.0.2] — Fase 2 selesai ✅

**Fase:** Fase 2 — Login & profil siswa

### Dicapai
- Firebase Authentication berhasil diintegrasikan
- Halaman daftar akun berfungsi dan menyimpan profil ke Firestore
- Halaman login berfungsi dengan email & password
- Profil siswa (nama, karakter, XP, level) tampil setelah login
- Tombol logout berfungsi

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

## [ver.1.0] — *(tujuan akhir)*

**Fase:** Fase 7 — Deploy & polish  
Versi pertama yang lengkap dan bisa diakses publik.

### Rencana isi ver.1.0
- Tampilan UI yang telah dipoles dan ramah anak SD
- Sudah diuji coba dengan pengguna nyata
- Website live dan bisa diakses dari link Vercel
- Semua fitur dari fase 1–7 berjalan stabil

---

## [ver.1.x ke atas] — Penambahan Fitur

Versi di atas 1.0 adalah ruang untuk inovasi setelah project selesai.  
Beberapa ide untuk masa depan:

- `ver.1.1` — Tambah mata pelajaran baru (Matematika, IPA, IPS, dll)
- `ver.1.2` — Mode multiplayer / battle soal antar siswa
- `ver.1.3` — Dashboard guru untuk memantau progress siswa
- `ver.1.4` — Sistem guild / kelompok belajar
- `ver.1.5` — Aplikasi mobile (React Native)
- `ver.2.0` — Versi besar berikutnya *(belum ditentukan)*

---

*Changelog ini akan diperbarui setiap kali ada kemajuan nyata dalam pengembangan.*
