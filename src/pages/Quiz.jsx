import { useState } from "react";
import { db } from "../firebase/config";
import { doc, addDoc, collection, updateDoc, increment } from "firebase/firestore";
import soal from "../data/soal";

function Quiz({ siswaId, onSelesai }) {
  const [nomor, setNomor] = useState(0);
  const [jawaban, setJawaban] = useState([]);
  const [dipilih, setDipilih] = useState(null);
  const [selesai, setSelesai] = useState(false);
  const [totalBenar, setTotalBenar] = useState(0);
  const [xpDapat, setXpDapat] = useState(0);

  const soalSekarang = soal[nomor];

  const handlePilih = (pilihan) => {
    setDipilih(pilihan);
  };

  const handleLanjut = async () => {
    const jawabanBaru = [
      ...jawaban,
      {
        soalId: soalSekarang.id,
        pertanyaan: soalSekarang.pertanyaan,
        dijawab: dipilih,
        benar: dipilih === soalSekarang.jawaban,
      },
    ];

    setJawaban(jawabanBaru);
    setDipilih(null);

    if (nomor + 1 < soal.length) {
      setNomor(nomor + 1);
    } else {
      const benar = jawabanBaru.filter((j) => j.benar).length;
      const xpDidapat = benar * 10;

      setTotalBenar(benar);
      setXpDapat(xpDidapat);

      // Simpan hasil quiz ke Firestore
      await addDoc(collection(db, "hasil_quiz"), {
        siswaId: siswaId,
        tanggal: new Date(),
        totalSoal: soal.length,
        totalBenar: benar,
        xpDidapat: xpDidapat,
        detail: jawabanBaru,
      });

      // Tambah XP ke profil siswa
      await updateDoc(doc(db, "siswa", siswaId), {
        xp: increment(xpDidapat),
      });

      setSelesai(true);
      onSelesai(benar, xpDidapat);
    }
  };

  // Tampilan setelah quiz selesai
  if (selesai) {
    return (
      <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h2>Quiz Selesai! 🎉</h2>
        <p>Jawaban benar: {totalBenar} dari {soal.length}</p>
        <p>⭐ XP didapat: +{xpDapat}</p>
      </div>
    );
  }

  // Tampilan soal
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "500px" }}>
      <p style={{ color: "#888" }}>
        Soal {nomor + 1} dari {soal.length}
      </p>
      <h3>{soalSekarang.pertanyaan}</h3>
      <div style={{ marginTop: "1rem" }}>
        {soalSekarang.pilihan.map((p) => (
          <button
            key={p}
            onClick={() => handlePilih(p)}
            style={{
              display: "block",
              width: "100%",
              padding: "0.75rem",
              marginBottom: "0.5rem",
              cursor: "pointer",
              background: dipilih === p ? "#4f46e5" : "#f3f4f6",
              color: dipilih === p ? "white" : "black",
              border: "1px solid #ddd",
              borderRadius: "8px",
              textAlign: "left",
              fontSize: "1rem",
            }}
          >
            {p}
          </button>
        ))}
      </div>
      <button
        onClick={handleLanjut}
        disabled={!dipilih}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 2rem",
          cursor: dipilih ? "pointer" : "not-allowed",
          background: dipilih ? "#4f46e5" : "#ccc",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
        }}
      >
        {nomor + 1 === soal.length ? "Selesai" : "Lanjut →"}
      </button>
    </div>
  );
}

export default Quiz;