import { useState, useEffect } from "react";
import { auth, db } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc, arrayUnion, increment } from "firebase/firestore";
import { hitungLevel, xpLevelBerikutnya } from "./data/level";
import daftarItem from "./data/item";
import daftarQuest from "./data/quest";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Karakter from "./pages/Karakter";
import Quest from "./pages/Quest";
import Leaderboard from "./pages/Leaderboard";

function App() {
  const [siswa, setSiswa] = useState(null);
  const [userId, setUserId] = useState(null);
  const [halaman, setHalaman] = useState("profil");
  const [pesanLevel, setPesanLevel] = useState(null);
  const [pesanItem, setPesanItem] = useState(null);
  const [pesanQuest, setPesanQuest] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        const snap = await getDoc(doc(db, "siswa", user.uid));
        if (snap.exists()) setSiswa(snap.data());
      } else {
        setSiswa(null);
        setUserId(null);
      }
    });
    return () => unsub();
  }, []);

  const handleQuizSelesai = async (benar, xp) => {
    setHalaman("profil");

    const snap = await getDoc(doc(db, "siswa", userId));
    if (!snap.exists()) return;

    let dataBaru = { ...snap.data() };
    const hariIni = new Date().toDateString();
    const progressHarian = dataBaru.progressHarian || {};
    const tanggalTerakhir = progressHarian.tanggal || "";

    const quizHariIni = tanggalTerakhir === hariIni
      ? (progressHarian.quizCount || 0) + 1 : 1;
    const perfectHariIni = tanggalTerakhir === hariIni
      ? (progressHarian.perfectCount || 0) + (benar === 5 ? 1 : 0)
      : (benar === 5 ? 1 : 0);
    const questSelesaiHariIni = tanggalTerakhir === hariIni
      ? (progressHarian.questSelesai || []) : [];

    await updateDoc(doc(db, "siswa", userId), {
      progressHarian: {
        tanggal: hariIni,
        quizCount: quizHariIni,
        perfectCount: perfectHariIni,
        questSelesai: questSelesaiHariIni,
      },
      quizSelesai: increment(1),
    });

    dataBaru.progressHarian = {
      tanggal: hariIni,
      quizCount: quizHariIni,
      perfectCount: perfectHariIni,
      questSelesai: questSelesaiHariIni,
    };
    dataBaru.quizSelesai = (dataBaru.quizSelesai || 0) + 1;

    const questBaru = daftarQuest.filter((quest) => {
      if (questSelesaiHariIni.includes(quest.id)) return false;
      if (quest.syarat.quizHariIni && quizHariIni >= quest.syarat.quizHariIni) return true;
      if (quest.syarat.nilaiPerfect && perfectHariIni >= quest.syarat.nilaiPerfect) return true;
      return false;
    });

    if (questBaru.length > 0) {
      const totalXpQuest = questBaru.reduce((total, q) => total + q.reward.xp, 0);
      const idQuestBaru = questBaru.map((q) => q.id);
      const namaQuest = questBaru.map((q) => `${q.emoji} ${q.nama}`).join(", ");

      await updateDoc(doc(db, "siswa", userId), {
        xp: increment(totalXpQuest),
        "progressHarian.questSelesai": arrayUnion(...idQuestBaru),
      });

      dataBaru.xp = (dataBaru.xp || 0) + totalXpQuest;
      dataBaru.progressHarian.questSelesai = [...questSelesaiHariIni, ...idQuestBaru];

      setPesanQuest(`🎯 Quest selesai: ${namaQuest}! +${totalXpQuest} XP`);
      setTimeout(() => setPesanQuest(null), 6000);
    }

    const levelLama = hitungLevel(dataBaru.xp - xp);
    const levelBaru = hitungLevel(dataBaru.xp);
    if (levelBaru.level !== levelLama.level) {
      await updateDoc(doc(db, "siswa", userId), { level: levelBaru.level });
      dataBaru.level = levelBaru.level;
      setPesanLevel(`🎉 Selamat! Kamu naik ke level ${levelBaru.level} — ${levelBaru.nama}!`);
      setTimeout(() => setPesanLevel(null), 5000);
    }

    const itemDimiliki = dataBaru.item || [];
    const itemBaru = daftarItem.filter((item) => {
      return (
        !itemDimiliki.includes(item.id) &&
        dataBaru.level >= item.syarat.level &&
        dataBaru.quizSelesai >= item.syarat.quizSelesai
      );
    });

    if (itemBaru.length > 0) {
      const idItemBaru = itemBaru.map((i) => i.id);
      await updateDoc(doc(db, "siswa", userId), { item: arrayUnion(...idItemBaru) });
      dataBaru.item = [...itemDimiliki, ...idItemBaru];
      const namaItem = itemBaru.map((i) => `${i.emoji} ${i.nama}`).join(", ");
      setPesanItem(`🎁 Item baru: ${namaItem}!`);
      setTimeout(() => setPesanItem(null), 6000);
    }

    setSiswa(dataBaru);
  };

  if (siswa) {
    if (halaman === "quiz") {
      return <Quiz siswaId={userId} onSelesai={handleQuizSelesai} />;
    }

    const levelInfo = hitungLevel(siswa.xp);
    const xpBerikutnya = xpLevelBerikutnya(siswa.xp);
    const xpUntukLevel = levelInfo.xpMin;
    const progressPersen = xpBerikutnya
      ? Math.round(((siswa.xp - xpUntukLevel) / (xpBerikutnya - xpUntukLevel)) * 100)
      : 100;

    const tabs = [
      { id: "profil",      label: "🏠 Profil" },
      { id: "karakter",    label: "⚔️ Karakter" },
      { id: "quest",       label: "🎯 Quest" },
      { id: "leaderboard", label: "🏆 Ranking" },
    ];

    return (
      <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "480px", margin: "0 auto" }}>

        {pesanLevel && (
          <div style={{ background: "#4f46e5", color: "white", padding: "1rem", borderRadius: "10px", marginBottom: "0.75rem", fontWeight: "bold", textAlign: "center" }}>
            {pesanLevel}
          </div>
        )}
        {pesanQuest && (
          <div style={{ background: "#d97706", color: "white", padding: "1rem", borderRadius: "10px", marginBottom: "0.75rem", fontWeight: "bold", textAlign: "center" }}>
            {pesanQuest}
          </div>
        )}
        {pesanItem && (
          <div style={{ background: "#16a34a", color: "white", padding: "1rem", borderRadius: "10px", marginBottom: "0.75rem", fontWeight: "bold", textAlign: "center" }}>
            {pesanItem}
          </div>
        )}

        <h2 style={{ marginBottom: "0.25rem" }}>Selamat datang, {siswa.nama}! 👋</h2>

        <div style={{ display: "flex", gap: "0.4rem", marginBottom: "1.5rem", marginTop: "1rem", flexWrap: "wrap" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setHalaman(tab.id)}
              style={{
                padding: "0.45rem 0.9rem",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                background: halaman === tab.id ? "#4f46e5" : "#f3f4f6",
                color: halaman === tab.id ? "white" : "#555",
                fontWeight: halaman === tab.id ? "bold" : "normal",
                fontSize: "0.88rem",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {halaman === "profil" && (
          <div>
            <div style={{ background: "#f3f4f6", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                <span style={{ fontWeight: "bold" }}>🏆 Level {levelInfo.level} — {levelInfo.nama}</span>
                <span style={{ color: "#888", fontSize: "0.9rem" }}>⭐ {siswa.xp} XP</span>
              </div>
              <div style={{ background: "#ddd", borderRadius: "999px", height: "14px", overflow: "hidden" }}>
                <div style={{ background: "#4f46e5", width: `${progressPersen}%`, height: "100%", borderRadius: "999px", transition: "width 0.5s ease" }} />
              </div>
              <div style={{ fontSize: "0.8rem", color: "#888", marginTop: "0.4rem", textAlign: "right" }}>
                {xpBerikutnya
                  ? `${siswa.xp - xpUntukLevel} / ${xpBerikutnya - xpUntukLevel} XP menuju level ${levelInfo.level + 1}`
                  : "🎖️ Level maksimal tercapai!"}
              </div>
            </div>

            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "0.75rem 1rem", marginBottom: "1.25rem", fontSize: "0.9rem", color: "#166534" }}>
              📝 Quiz diselesaikan: <strong>{siswa.quizSelesai || 0} kali</strong>
            </div>

            <button onClick={() => setHalaman("quiz")} style={{ padding: "0.75rem 2rem", cursor: "pointer", background: "#4f46e5", color: "white", border: "none", borderRadius: "8px", fontSize: "1rem", width: "100%", marginBottom: "0.75rem" }}>
              Mulai Quiz ⚔️
            </button>
            <button onClick={() => auth.signOut()} style={{ padding: "0.75rem 2rem", cursor: "pointer", background: "#f3f4f6", color: "black", border: "1px solid #ddd", borderRadius: "8px", fontSize: "1rem", width: "100%" }}>
              Logout
            </button>
          </div>
        )}

        {halaman === "karakter"    && <Karakter siswa={siswa} />}
        {halaman === "quest"       && <Quest siswa={siswa} />}
        {halaman === "leaderboard" && <Leaderboard userId={userId} />}

      </div>
    );
  }

  return (
    <div>
      <Register />
      <hr />
      <Login />
    </div>
  );
}

export default App;