import daftarQuest from "../data/quest";

function Quest({ siswa }) {
  const hariIni = new Date().toDateString();
  const progressHarian = siswa.progressHarian || {};
  const tanggalTerakhir = progressHarian.tanggal || "";
  const quizHariIni = tanggalTerakhir === hariIni
    ? (progressHarian.quizCount || 0)
    : 0;
  const perfectHariIni = tanggalTerakhir === hariIni
    ? (progressHarian.perfectCount || 0)
    : 0;
  const questSelesai = tanggalTerakhir === hariIni
    ? (progressHarian.questSelesai || [])
    : [];

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h4 style={{ marginBottom: "0.25rem" }}>📅 Quest Harian</h4>
      <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
        Reset setiap hari. Quiz diselesaikan hari ini: <strong>{quizHariIni}</strong>
      </p>

      {daftarQuest.map((quest) => {
        const sudahSelesai = questSelesai.includes(quest.id);

        // Hitung progress quest
        let progress = 0;
        let target = 1;
        if (quest.syarat.quizHariIni) {
          progress = Math.min(quizHariIni, quest.syarat.quizHariIni);
          target = quest.syarat.quizHariIni;
        } else if (quest.syarat.nilaiPerfect) {
          progress = Math.min(perfectHariIni, quest.syarat.nilaiPerfect);
          target = quest.syarat.nilaiPerfect;
        }

        const persen = Math.round((progress / target) * 100);

        return (
          <div
            key={quest.id}
            style={{
              background: sudahSelesai ? "#f0fdf4" : "#f9fafb",
              border: `1px solid ${sudahSelesai ? "#bbf7d0" : "#e5e7eb"}`,
              borderRadius: "12px",
              padding: "1rem",
              marginBottom: "0.75rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                <span style={{ fontSize: "1.5rem" }}>{quest.emoji}</span>
                <div>
                  <div style={{ fontWeight: "bold", fontSize: "0.95rem" }}>
                    {quest.nama}
                    {sudahSelesai && <span style={{ color: "#16a34a", marginLeft: "0.4rem" }}>✅</span>}
                  </div>
                  <div style={{ color: "#888", fontSize: "0.82rem" }}>{quest.deskripsi}</div>
                </div>
              </div>
              <div style={{
                background: "#ede9fe",
                color: "#4f46e5",
                borderRadius: "8px",
                padding: "0.2rem 0.6rem",
                fontSize: "0.8rem",
                fontWeight: "bold",
                whiteSpace: "nowrap"
              }}>
                +{quest.reward.xp} XP
              </div>
            </div>

            {/* Progress bar quest */}
            {!sudahSelesai && (
              <div style={{ marginTop: "0.75rem" }}>
                <div style={{
                  background: "#e5e7eb",
                  borderRadius: "999px",
                  height: "8px",
                  overflow: "hidden"
                }}>
                  <div style={{
                    background: "#4f46e5",
                    width: `${persen}%`,
                    height: "100%",
                    borderRadius: "999px",
                    transition: "width 0.5s ease"
                  }} />
                </div>
                <div style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "0.25rem", textAlign: "right" }}>
                  {progress} / {target}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Quest;