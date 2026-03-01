// import { useState } from "react";

// function BusBooking() {
//   const [phone, setPhone] = useState("");
//   const [destination, setDestination] = useState("");
//   const [persons, setPersons] = useState("");
//   const [days, setDays] = useState("");

//   const whatsappNumber = "201234567890";

//   const handleWhatsapp = () => {
//     const message = `
// أرغب في حجز باص:

// 📍 الوجهة: ${destination}
// 👥 عدد الركاب: ${persons}
// 📅 عدد الأيام: ${days}
// 📱 رقم الهاتف: ${phone}
//     `.trim();

//     const url =`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };
 
//   return (
//     <div className="bus-page">
//       <h2>حجز باص</h2>

//       <input
//         type="text"
//         placeholder="رقم الهاتف"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />

//       <input
//         type="text"
//         placeholder="نقطة الوصول"
//         value={destination}
//         onChange={(e) => setDestination(e.target.value)}
//       />

//       <input
//         type="number"
//         placeholder="عدد الركاب"
//         value={persons}
//         onChange={(e) => setPersons(e.target.value)}
//       />

//       <input
//         type="number"
//         placeholder="عدد الأيام"
//         value={days}
//         onChange={(e) => setDays(e.target.value)}
//       />

//       <button className="btn-whatsapp" onClick={handleWhatsapp}>
//         تواصل عبر واتساب
//       </button>
//     </div>
//   );
// }

// export default BusBooking;