import { useState } from "react";
import Login from "./login";
import Register from "./register";

function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <button className="close-btn" onClick={onClose}>✖</button>

        {isLogin ? <Login /> : <Register />}

        <div className="switch-auth">
          {isLogin ? (
            <p>
              ليس لديك حساب؟
              <span onClick={() => setIsLogin(false)}> سجل الآن</span>
            </p>
          ) : (
            <p>
              لديك حساب؟
              <span onClick={() => setIsLogin(true)}> تسجيل دخول</span>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

export default AuthModal;