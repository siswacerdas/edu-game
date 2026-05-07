const daftarQuest = [
  {
    id: "quiz_pertama",
    nama: "Langkah Pertama",
    deskripsi: "Selesaikan 1 quiz hari ini",
    emoji: "📝",
    syarat: { quizHariIni: 1 },
    reward: { xp: 20 },
  },
  {
    id: "quiz_tiga",
    nama: "Rajin Belajar",
    deskripsi: "Selesaikan 3 quiz hari ini",
    emoji: "📚",
    syarat: { quizHariIni: 3 },
    reward: { xp: 50 },
  },
  {
    id: "jawaban_sempurna",
    nama: "Nilai Sempurna",
    deskripsi: "Jawab semua soal dengan benar dalam satu quiz",
    emoji: "⭐",
    syarat: { nilaiPerfect: 1 },
    reward: { xp: 30 },
  },
  {
    id: "quiz_lima",
    nama: "Juara Belajar",
    deskripsi: "Selesaikan 5 quiz hari ini",
    emoji: "🏆",
    syarat: { quizHariIni: 5 },
    reward: { xp: 100 },
  },
];

export default daftarQuest;