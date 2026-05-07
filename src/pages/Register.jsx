import { useState } from "react";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Register() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pesan, setPesan] = useState("");

  const handleDaftar = async () => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "siswa", result.user.uid), {
        nama: nama,
        email: email,
        xp: 0,
        level: 1,
        karakter: "pejuang"
      });
      setPesan("✅ Berhasil daftar! Selamat datang, " + nama);
    } catch (error) {
      setPesan("❌ Gagal: " + error.message);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "400px" }}>
      <h2>Daftar Akun</h2>
      <input placeholder="Nama lengkap" value={nama}
        onChange={e => setNama(e.target.value)}
        style={{ display: "block", margin: "0.5rem 0", padding: "0.5rem", width: "100%" }} />
      <input placeholder="Email" value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ display: "block", margin: "0.5rem 0", padding: "0.5rem", width: "100%" }} />
      <input placeholder="Password" type="password" value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ display: "block", margin: "0.5rem 0", padding: "0.5rem", width: "100%" }} />
      <button onClick={handleDaftar}
        style={{ padding: "0.5rem 1.5rem", marginTop: "0.5rem", cursor: "pointer" }}>
        Daftar
      </button>
      <p>{pesan}</p>
    </div>
  );
}

export default Register;