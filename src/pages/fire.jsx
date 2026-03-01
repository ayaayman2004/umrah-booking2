import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";

const handleBooking = async () => {
  if (!auth.currentUser) {
    alert("يجب تسجيل الدخول");
    return;
  }

  await addDoc(collection(db, "bookings"), {
    user: auth.currentUser.email,
    type,
    persons,
    hotelStars,
    days,
    totalPrice
  });

  alert("تم الحجز");
};