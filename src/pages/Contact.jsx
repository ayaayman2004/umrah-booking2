import flightImg from "./imgs/'air.jpg";

function FlightBooking() {
  const whatsappNumber = "20506264894";

  const whatsappMessage = `
أرغب في حجز رحلة طيران ✈
يرجى التواصل لإكمال التفاصيل.
  `.trim();

  return (
    <div className="flight-wrapper">

      <div className="flight-card">

        <img
          src={flightImg}
          alt="حجز الطيران"
          className="flight-image"
        />

        <div className="flight-content">

          <h2>حجز الطيران ✈</h2>

          <p>
            خدمة حجز الطيران توفر لك تجربة سفر سهلة ومريحة.
            نوفر خيارات متعددة للرحلات مع دعم كامل قبل السفر.
            اضغط على واتساب للتواصل معنا لإكمال التفاصيل.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            استفسار عبر واتساب
          </a>

        </div>

      </div>

    </div>
  );
}

export default FlightBooking;