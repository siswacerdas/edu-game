// Daftar level dan XP yang dibutuhkan untuk naik level
const daftarLevel = [
  { level: 1, nama: "Petualang Baru",    xpMin: 0   },
  { level: 2, nama: "Pejuang Muda",      xpMin: 50  },
  { level: 3, nama: "Ksatria Berlatih",  xpMin: 120 },
  { level: 4, nama: "Ksatria Sejati",    xpMin: 220 },
  { level: 5, nama: "Pahlawan Desa",     xpMin: 350 },
  { level: 6, nama: "Pahlawan Negeri",   xpMin: 520 },
  { level: 7, nama: "Legenda Sekolah",   xpMin: 730 },
];

// Fungsi: hitung level dari total XP
export function hitungLevel(xp) {
  let levelSekarang = daftarLevel[0];
  for (let i = daftarLevel.length - 1; i >= 0; i--) {
    if (xp >= daftarLevel[i].xpMin) {
      levelSekarang = daftarLevel[i];
      break;
    }
  }
  return levelSekarang;
}

// Fungsi: hitung XP berikutnya (untuk progress bar)
export function xpLevelBerikutnya(xp) {
  for (let i = 0; i < daftarLevel.length - 1; i++) {
    if (xp < daftarLevel[i + 1].xpMin) {
      return daftarLevel[i + 1].xpMin;
    }
  }
  return null; // sudah level maksimal
}

export default daftarLevel;