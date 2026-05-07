const daftarItem = [
  {
    id: "pedang_kayu",
    nama: "Pedang Kayu",
    emoji: "🗡️",
    deskripsi: "Senjata pertama seorang pejuang",
    bonusStat: { kekuatan: 1 },
    syarat: { level: 1, quizSelesai: 1 },
  },
  {
    id: "topi_sihir",
    nama: "Topi Sihir",
    emoji: "🎩",
    deskripsi: "Meningkatkan kecerdasan pemakainya",
    bonusStat: { kecerdasan: 2 },
    syarat: { level: 2, quizSelesai: 3 },
  },
  {
    id: "sepatu_angin",
    nama: "Sepatu Angin",
    emoji: "👟",
    deskripsi: "Membuat langkah semakin ringan",
    bonusStat: { ketangkasan: 2 },
    syarat: { level: 2, quizSelesai: 5 },
  },
  {
    id: "perisai_besi",
    nama: "Perisai Besi",
    emoji: "🛡️",
    deskripsi: "Perlindungan terbaik di medan perang",
    bonusStat: { kekuatan: 3 },
    syarat: { level: 3, quizSelesai: 8 },
  },
  {
    id: "mahkota_bijak",
    nama: "Mahkota Bijak",
    emoji: "👑",
    deskripsi: "Hanya dimiliki oleh yang paling tekun belajar",
    bonusStat: { kecerdasan: 5 },
    syarat: { level: 5, quizSelesai: 15 },
  },
];

export default daftarItem;