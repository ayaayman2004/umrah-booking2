import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import logo from "./رحلات.jpg";
import AuthModal from "./modal";
import { auth } from "../firebase";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const isAdmin = user?.email === "ay2004@gmail.com"; // 👈 إيميل الأدمن

  const userInitial = user?.displayName
    ? user.displayName.charAt(0).toUpperCase()
    : user?.email
    ? user.email.charAt(0).toUpperCase()
    : "";

  return (
    <>
      <nav className="navbar">

        <div className={`nav-links ${isOpen ? "active" : ""}`}>

          {/* الأفاتار */}
          {user && (
            <div className="user-avatar">
              {userInitial}
            </div>
          )}

          <Link to="/home" className="nav-item">الرئيسية</Link>
          <Link to="/about" className="nav-item">من نحن</Link>
          <Link to="/hotels" className="nav-item">فنادق</Link>
          <Link to="/buses" className="nav-item">حجز باصات</Link>
          <Link to="/packages" className="nav-item">     الشات</Link>
          <Link to="/packageDetails" className="nav-item">باقات</Link>
          <Link to="/booking" className="nav-item">حجزفنادق</Link>
          <Link to="/contact" className="nav-item"> حجز طيران  </Link>

          {/* لوحة الأدمن */}
          {isAdmin && (
            <Link to="/admin" className="nav-item">
              لوحة الأدمن
            </Link>
          )}

          {/* زر واتساب */}
          <a
            href="https://wa.me/20506264894"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-nav"
          >
            واتساب
          </a>

          {/* تسجيل / خروج */}
          {user ? (
            <button onClick={() => auth.signOut()} className="btn-primary na">
              تسجيل خروج
            </button>
          ) : (
            <button onClick={() => setOpenAuth(true)} className="btn-primary">
              <FaUser /> تسجيل
            </button>
          )}

        </div>

        {/* اللوجو */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* الهامبرجر */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

      </nav>

      <AuthModal
        isOpen={openAuth}
        onClose={() => setOpenAuth(false)}
      />
    </>
  );
}

export default Navbar;