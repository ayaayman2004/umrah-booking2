import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaWifi, FaUtensils, FaParking, FaConciergeBell, FaStar, FaWhatsapp } from "react-icons/fa";

import image1 from "./imgs/ضيافة الرجاء 1.jpg";
import image1_2 from "./imgs/ضيافة الرجاء 2.jpg";
import image1_3 from "./imgs/ضيافة الرجاء 3.jpg";

import image2 from "./imgs/فلسطين1.jpg";
import image2_2 from "./imgs/فلسطين2.jpg";
import image2_3 from "./imgs/فلسطين3jpg.jpg";

import image3 from "./imgs/بكة1jpg.jpg";
import image3_2 from "./imgs/بكة2jpg.jpg";
import image3_3 from "./imgs/بكة3.jpg";

import image4 from "./imgs/هيليدي1.jpg";
import image4_2 from "./imgs/هيليدي2.jpg";
import image4_3 from "./imgs/هيليدي3.jpg";

import image5 from "./imgs/مني1.jpg";
import image5_2 from "./imgs/مني2.jpg";
import image5_3 from "./imgs/مني3.jpg";

import image6 from "./imgs/مكة1.jpg";
import image6_2 from "./imgs/مكة2.jpg";
import image6_3 from "./imgs/مكة3.jpg";

import image7 from "./imgs/قصر رزق1.jpg";
import image7_2 from "./imgs/قصر رزق2.jpg";
import image7_3 from "./imgs/قصر رزق2.jpg";

const hotelsData = {
  1: {
    name: "فندق ضيافة الرجاء",
    location: "شارع إبراهيم الخليل",
    description:
      "فندق قريب من الحرم (800 متر). مناسب للحجاج والمعتمرين. يتميز بغرف مريحة وخدمة جيدة.",
    stars: 3,
    images: [image1, image1_2, image1_3],
  },
  2: {
    name: "فندق فلسطين",
    location: "شارع إبراهيم الخليل",
    description:
      "يقع بالقرب من الحرم. يوفر إقامة مريحة وخدمات جيدة.",
    stars: 5,
    images: [image2, image2_2, image2_3],
  },
  3: {
    name: "أركان بكه",
    location: "العزيزية",
    description:
      "فندق 3 نجوم في العزيزية. يبعد دقائق عن الحرم.",
    stars: 4,
    images: [image3, image3_2, image3_3],
  },
  4: {
    name: "هيدلدي إن",
    location: "العزيزية",
    description:
      "يقع على بعد 3 كم من الحرم. مناسب للإقامة المريحة.",
    stars: 4,
    images: [image4, image4_2, image4_3],
  },
  5: {
    name: "منى كونكورد",
    location: "العزيزية",
    description:
      "فندق قريب من الحرم. مناسب بأسعار جيدة.",
    stars: 5,
    images: [image5, image5_2, image5_3],
  },
  6: {
    name: "فندق مكة ميلينيوم",
    location: "أبراج البيت",
    description:
      "فندق فاخر أمام الحرم مباشرة.",
    stars: 5,
    images: [image6, image6_2, image6_3],
  },
  7: {
    name: "فندق قصر رزق",
    location: "العزيزية",
    description:
      "فندق مريح بأسعار مناسبة.",
    stars: 4,
    images: [image7, image7_2, image7_3],
  },
};

function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = hotelsData[id];
  const [current, setCurrent] = useState(0);

  if (!hotel) return <h2>الفندق غير موجود</h2>;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % hotel.images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? hotel.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="details-wrapper">

      <div className="details-card">

        <div className="slider">
          <img src={hotel.images[current]} alt={hotel.name} />

          {hotel.images.length > 1 && (
            <>
              <button className="prev" onClick={prevSlide}>‹</button>
              <button className="next" onClick={nextSlide}>›</button>
            </>
          )}
        </div>

        <div className="details-content" style={{ direction: "rtl", textAlign: "right" }}>

          <h2>{hotel.name}</h2>

          <div className="stars">
            {[1,2,3,4,5].map((i) => (
              <FaStar key={i} color={i <= hotel.stars ? "#facc15" : "#ddd"} />
            ))}
          </div>

          <p className="location">{hotel.location}</p>
          <p className="description">{hotel.description}</p>

          <div className="features">
            <div><FaWifi /> واي فاي مجاني</div>
            <div><FaUtensils /> مطعم</div>
            <div><FaParking /> موقف سيارات</div>
            <div><FaConciergeBell /> خدمة الغرف</div>
          </div>

          <div className="buttons">
            {/* زر الحجز يودّي لصفحة الحجز */}
            <button className="btn-book" onClick={() => navigate("/booking")}>
              احجز الآن
            </button>

            <a
              href={`https://wa.me/20506264894?text=أرغب في الحجز في ${hotel.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              واتساب <FaWhatsapp />
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}

export default HotelDetails;