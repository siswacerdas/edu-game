import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";

function Leaderboard({ userId }) {
  const [daftarSiswa, setDaftarSiswa] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ambilData = async () => {
      const q = query(
        collection(db, "siswa"),
        orderBy("xp", "desc"),
        limit(10)
      );
      const snap = await getDocs(q);
      const data = snap.docs.map((doc, index) => ({
        id: doc.id,
        peringkat: index + 1,
        ...doc.data(),
      }));
      setDaftarSiswa(data);
      setLoading(false);
    };
    ambilData();
  }, []);

  if (loading) {
    return <p style={{ color: "#888", fontFamily: "sans-serif" }}>Memuat leaderboard...</p>;
  }

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h4 style={{ marginBottom: "0.25rem" }}>🏆 Papan Peringkat</h4>
      <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
        Top 10 siswa dengan XP terbanyak
      </p>

      {daftarSiswa.length === 0 ? (
        <p style={{ color: "#aaa" }}>Belum ada data siswa.</p>
      ) : (
        daftarSiswa.map((siswa) => {
          const adalahSaya = siswa.id === userId;
          const medalEmoji =
            siswa.peringkat === 1 ? "🥇" :
            siswa.peringkat === 2 ? "🥈" :
            siswa.peringkat === 3 ? "🥉" :
            `#${siswa.peringkat}`;

          return (
            <div
              key={siswa.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                background: adalahSaya ? "#ede9fe" : "#f9fafb",
                border: `1px solid ${adalahSaya ? "#c4b5fd" : "#e5e7eb"}`,
                borderRadius: "12px",
                padding: "0.85rem 1rem",
                marginBottom: "0.6rem",
              }}
            >
              <div style={{
                fontSize: siswa.peringkat <= 3 ? "1.5rem" : "0.95rem",
                fontWeight: "bold",
                color: "#4f46e5",
                minWidth: "2rem",
                textAlign: "center"
              }}>
                {medalEmoji}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: adalahSaya ? "bold" : "normal" }}>
                  {siswa.nama}
                  {adalahSaya && (
                    <span style={{ color: "#7c3aed", fontSize: "0.8rem", marginLeft: "0.4rem" }}>
                      (kamu)
                    </span>
                  )}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#888" }}>
                  Level {siswa.level} · {siswa.karakter}
                </div>
              </div>

              <div style={{ fontWeight: "bold", color: "#4f46e5", fontSize: "0.95rem" }}>
                ⭐ {siswa.xp}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Leaderboard;