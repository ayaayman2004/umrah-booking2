import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { FaStar } from "react-icons/fa";

function Booking() {
  const [type, setType] = useState("");
  const [persons, setPersons] = useState("");
  const [hotelStars, setHotelStars] = useState(0);
  const [totalPrice, setTotalPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleBooking = async () => {
    if (!auth.currentUser) {
      alert("يجب تسجيل الدخول أولاً");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "bookings"), {
        userId: auth.currentUser.uid,
        userEmail: email || auth.currentUser.email,
        phone,
        type,
        persons,
        hotelStars,
        totalPrice,
        createdAt: new Date()
      });

      alert("تم الحجز بنجاح - رقم الحجز: " + docRef.id);

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="booking-container">

      <h2>تسجيل الحجز</h2>

      <select onChange={(e) => setType(e.target.value)}>
        <option value="">اختر الوجهة</option>
        <option value="مكة">مكة</option>
        <option value="المدينة">المدينة</option>
         <option value="المدينة">مكة والدينة</option>
      </select>

      <input
        type="number"
        placeholder="عدد الأفراد"
        onChange={(e) => setPersons(e.target.value)}
      />

      {/* نظام الفندق */}
      

      <input
        type="number"
        placeholder="السعر"
        onChange={(e) => setTotalPrice(e.target.value)}
      />

      <input
        type="tel"
        placeholder="رقم الهاتف"
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="email"
        placeholder="البريد الإلكتروني"
        onChange={(e) => setEmail(e.target.value)}
      />
 <div className="star-container">
        <p>نظام الفندق</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            onClick={() => setHotelStars(star)}
            className="star-icon"
            style={{ color: star <= hotelStars ? "gold" : "gray" }}
          />
        ))}
      </div>
      <button className="booking-btn" onClick={handleBooking}>
        احجز الآن
      </button>

    </div>
  );
}

export default Booking;