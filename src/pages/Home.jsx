
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import heroVideo from "./imgs/video.mp4"; // حطي الفيديو هنا

const typingText =
  "رحلات قافلة التوبة بتنظيم احترافي، إقامة قريبة من الحرم، وخدمات متكاملة.";

function Home() {
  const [typed, setTyped] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // typing effect
  useEffect(() => {
    if (charIndex < typingText.length) {
      const timeout = setTimeout(() => {
        setTyped((prev) => prev + typingText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 60);

      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  return (
    <div className="home-wrapper">

      {/* 🎥 الفيديو بدل السلايدر */}
      <section className="video-section">

        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="video-overlay">
          <h1>رحلات قافلة التوبة</h1>
          <p>{typed}</p>
          <Link to="/packages" className="btn-hero">
            احجز الآن
          </Link>
        </div>

      </section>

      {/* 📊 الإحصائيات */}
      <section className="stats-section">
        <div className="stat-card">
          <h3>+500</h3>
          <p>رحلة مكتملة</p>
        </div>
        <div className="stat-card">
          <h3>+1000</h3>
          <p>معتمر سعيد</p>
        </div>
        <div className="stat-card">
          <h3>24/7</h3>
          <p>دعم متواصل</p>
        </div>
      </section>

      {/* 🧳 الخدمات */}
      <section className="services-section">

        <h2>خدماتنا</h2>

        <div className="services-grid">

          <div className="service-card">
            <span className="badge">عمرة</span>
            <h3>حجز العمرة</h3>
            <Link to="/packages" className="btn-small">التفاصيل</Link>
          </div>

          <div className="service-card">
            <span className="badge">فنادق</span>
            <h3>الفنادق</h3>
            <Link to="/hotels" className="btn-small">التفاصيل</Link>
          </div>

          <div className="service-card">
            <span className="badge">باصات</span>
            <h3>الباصات</h3>
            <Link to="/buses" className="btn-small">التفاصيل</Link>
          </div>

          <div className="service-card">
            <span className="badge">طيران</span>
            <h3>الطيران</h3>
            <Link to="/flight" className="btn-small">التفاصيل</Link>
          </div>

        </div>

      </section>

      {/* 📝 معلومات */}
      <section className="info-section">
        <h2>عن الخدمة</h2>
        <p>
          نقدم رحلات عمرة بتنظيم مريح وخدمات متكاملة، مع دعم كامل طوال الرحلة.
        </p>
      </section>

      {/* 📍 الخريطة */}
      <section className="map-section">
        <h2>موقع المكتب</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3626.4391225634245!2d46.715795!3d24.643009000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM4JzM0LjgiTiA0NsKwNDInNTYuOSJF!5e0!3m2!1sar!2seg!4v1772248249052!5m2!1sar!2seg"
          className="map-frame"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
}

export default Home;