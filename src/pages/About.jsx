
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function About() {
  return (
    <div className="about-wrapper">

      <div className="about-card">

        <h2>عن قافلة التوبة</h2>

        <p>
          مع قافلة التوبة تنطلق رحلات عمرة ميسّرة من الرياض إلى مكة المكرمة،
          بتنظيم متميز وخدمات متكاملة تلبي احتياجات المعتمرين.
          نوفر برامج متنوعة تناسب جميع الفئات، مع مواصلات مريحة،
          وإقامة قريبة من الحرم، وفريق إشراف يرافقكم طوال الرحلة
          لتسهيل أداء المناسك بكل راحة وطمأنينة.
        </p>

        <p>
          نسعى دائمًا لتقديم أفضل الخدمات بأعلى معايير الجودة،
          من خلال فريق عمل متخصص وخبرة طويلة في هذا المجال.
          نهدف إلى أن نكون الخيار الأول للمعتمرين،
          من خلال توفير برامج متنوعة تناسب جميع الاحتياجات والميزانيات.
        </p>

        <div className="about-contact">
          <h3>تواصل معنا</h3>

          <a href="https://wa.me/20506264894" target="_blank" rel="noopener noreferrer" className="btn">
            <FaWhatsapp /> واتساب
          </a>

          <a href="https://www.facebook.com/share/1C99yBQugs/" target="_blank" rel="noopener noreferrer">
            <FaFacebook /> فيسبوك
          </a>

          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> انستجرام
          </a>

          <a href="https://www.tiktok.com/@aymanasaad20?_r=1&_t=ZS-94G1Ro0EF5I" target="_blank" rel="noopener noreferrer">
            <FaTiktok /> تيك توك
          </a>

          <p>رقم الهاتف: 0506264894+</p>
        </div>

      </div>

    </div>
  );
}

export default About;