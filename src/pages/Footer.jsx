import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* القسم الأول - عن الموقع */}
        <div className="footer-section">
          <h3>عن رحلات العمرة</h3>
          <p>
            نوفر لك خدمات حجز العمرة، الفنادق، والطيران بسهولة وأمان.  
            هدفنا تسهيل رحلتك الروحانية بأفضل الأسعار والخدمات.
          </p>
        </div>

        {/* القسم الثاني - روابط سريعة */}
        <div className="footer-section">
          <h3>روابط سريعة</h3>
          <Link to="/">الرئيسية</Link>
          <Link to="/about">من نحن</Link>
          <Link to="/packages">الباقات</Link>
          <Link to="/booking">الحجز</Link>
          <Link to="/contact">تواصل معنا</Link>
        </div>

        {/* القسم الثالث - خدماتنا */}
        <div className="footer-section">
          <h3>خدماتنا</h3>
          <Link to="/packages">باقات العمرة</Link>
          <Link to="/hotels">حجز الفنادق</Link>
          <Link to="/flights">حجز الطيران</Link>
          <Link to="/buses">حجز الباصات</Link>
        </div>

        {/* القسم الرابع - تواصل */}
        <div className="footer-section">
          <h3>تواصل معنا</h3>
          <p>📞 الهاتف: 01000000000</p>
          <p>✉️ البريد: info@site.com</p>
          <p>📍 الموقع: مصر</p>
          <p>🕒 خدمة العملاء: 24/7</p>
        </div>

      </div>

      {/* الحقوق */}
      <div className="footer-bottom">
        © 2026 جميع الحقوق محفوظة | رحلات العمرة
      </div>
    </footer>
  );
}

export default Footer;