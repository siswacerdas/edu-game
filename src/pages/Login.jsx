import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pesan, setPesan] = useState("");

  const handleLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setPesan("✅ Login berhasil! Halo, " + result.user.email);
    } catch (error) {
      setPesan("❌ Gagal: " + error.message);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "400px" }}>
      <h2>Login</h2>
      <input placeholder="Email" value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ display: "block", margin: "0.5rem 0", padding: "0.5rem", width: "100%" }} />
      <input placeholder="Password" type="password" value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ display: "block", margin: "0.5rem 0", padding: "0.5rem", width: "100%" }} />
      <button onClick={handleLogin}
        style={{ padding: "0.5rem 1.5rem", marginTop: "0.5rem", cursor: "pointer" }}>
        Login
      </button>
      <p>{pesan}</p>
    </div>
  );
}

export default Login;