import daftarKarakter from "../data/karakter";
import daftarItem from "../data/item";

function Karakter({ siswa }) {
  // Cari data karakter yang dipilih siswa
  const karakter = daftarKarakter.find((k) => k.id === siswa.karakter)
    || daftarKarakter[0];

  // Item yang sudah dimiliki siswa
  const itemDimiliki = siswa.item || [];

  // Hitung bonus stat dari item
  const bonusDariItem = itemDimiliki.reduce((total, itemId) => {
    const item = daftarItem.find((i) => i.id === itemId);
    if (!item) return total;
    Object.entries(item.bonusStat).forEach(([stat, nilai]) => {
      total[stat] = (total[stat] || 0) + nilai;
    });
    return total;
  }, {});

  // Stat akhir = stat dasar + bonus item
  const statAkhir = {
    kekuatan:    karakter.stat.kekuatan    + (bonusDariItem.kekuatan    || 0),
    kecerdasan:  karakter.stat.kecerdasan  + (bonusDariItem.kecerdasan  || 0),
    ketangkasan: karakter.stat.ketangkasan + (bonusDariItem.ketangkasan || 0),
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>

      {/* Avatar karakter */}
      <div style={{
        textAlign: "center",
        background: "#f3f4f6",
        borderRadius: "16px",
        padding: "1.5rem",
        marginBottom: "1.5rem"
      }}>
        <div style={{ fontSize: "5rem", lineHeight: 1 }}>{karakter.emoji}</div>
        <h3 style={{ margin: "0.5rem 0 0.25rem" }}>{karakter.nama}</h3>
        <p style={{ color: "#888", fontSize: "0.9rem", margin: 0 }}>
          {karakter.deskripsi}
        </p>
      </div>

      {/* Stat karakter */}
      <h4 style={{ marginBottom: "0.75rem" }}>📊 Statistik Karakter</h4>
      <StatBar
        nama="⚔️ Kekuatan"
        nilai={statAkhir.kekuatan}
        bonus={bonusDariItem.kekuatan || 0}
      />
      <StatBar
        nama="🧠 Kecerdasan"
        nilai={statAkhir.kecerdasan}
        bonus={bonusDariItem.kecerdasan || 0}
      />
      <StatBar
        nama="💨 Ketangkasan"
        nilai={statAkhir.ketangkasan}
        bonus={bonusDariItem.ketangkasan || 0}
      />

      {/* Item yang dimiliki */}
      <h4 style={{ marginTop: "1.5rem", marginBottom: "0.75rem" }}>
        🎒 Item Dimiliki ({itemDimiliki.length})
      </h4>
      {itemDimiliki.length === 0 ? (
        <p style={{ color: "#aaa", fontSize: "0.9rem" }}>
          Belum ada item. Selesaikan quiz untuk mendapatkan item!
        </p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {itemDimiliki.map((itemId) => {
            const item = daftarItem.find((i) => i.id === itemId);
            if (!item) return null;
            return (
              <div key={itemId} style={{
                background: "#ede9fe",
                borderRadius: "10px",
                padding: "0.5rem 0.75rem",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem"
              }}>
                <span>{item.emoji}</span>
                <span>{item.nama}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Komponen progress bar untuk setiap stat
function StatBar({ nama, nilai, bonus }) {
  const maks = 15;
  const persen = Math.min((nilai / maks) * 100, 100);

  return (
    <div style={{ marginBottom: "0.75rem" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: "0.9rem",
        marginBottom: "0.25rem"
      }}>
        <span>{nama}</span>
        <span style={{ color: "#4f46e5", fontWeight: "bold" }}>
          {nilai}
          {bonus > 0 && (
            <span style={{ color: "#16a34a", fontSize: "0.8rem" }}>
              {" "}(+{bonus} item)
            </span>
          )}
        </span>
      </div>
      <div style={{
        background: "#e5e7eb",
        borderRadius: "999px",
        height: "10px",
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
    </div>
  );
}

export default Karakter;