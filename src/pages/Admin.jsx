import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Admin() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBookings(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div className="loading">جارِ التحميل...</div>;
  }

  return (
    <div className="admin-container">
      

      {bookings.length === 0 ? (
        <p>لا توجد حجوزات</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>النوع</th>
              <th>الأفراد</th>
              <th>الفندق</th>
              <th>السعر</th>
              <th>الموبايل</th>
              <th>الإيميل</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.type}</td>
                <td>{b.persons}</td>
                <td>{b.hotelStars || "—"} نجوم</td>
                <td>{b.totalPrice || "—"}</td>
                <td>{b.phone}</td>
                <td>{b.userEmail}</td>
              </tr>
            ))}
            
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;