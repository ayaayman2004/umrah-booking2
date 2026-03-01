import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("تم التسجيل بنجاح");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>تسجيل حساب</h2>

      <input
        type="text"
        placeholder="الاسم"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="البريد"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="كلمة المرور"
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="date"
        onChange={(e) => setBirthDate(e.target.value)}
      />

      <button onClick={handleRegister}>تسجيل</button>
    </div>
  );
}

export default Register;