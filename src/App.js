import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import BusPackages from "./pages/BusPackage";
import BusBooking from "./pages/BusBooking";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1">
        <Routes>

          {/* الصفحة الرئيسية */}
          <Route path="*" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />

          <Route path="/packages" element={<Packages />} />
          <Route path="/packageDetails" element={<PackageDetails />} />
          <Route path="/booking" element={<Booking user={user} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* الفنادق */}
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />

          {/* الباصات */}
          <Route path="/buses" element={<BusPackages />} />
          <Route path="/BusBooking" element={<BusBooking />} />

          {/* صفحة الأدمن محمية */}
          <Route
            path="/admin"
            element={
              user?.email === "admin@gmail.com" ? (
                <Admin />
              ) : (
                <Navigate to="/" />
              )
            }
          />

        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;