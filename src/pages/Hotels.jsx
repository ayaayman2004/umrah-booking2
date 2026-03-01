import { Link } from "react-router-dom";
import image1 from "./imgs/ضيافة الرجاء.png";
import image2 from "./imgs/فلسطين.png";
import image3 from "./imgs/بكة.png";
import image4 from "./imgs/هيليدي.png";
import image5 from "./imgs/مني.png";
import image6 from "./imgs/مكة.png";
import image7 from "./imgs/قصر رزق.png";

const hotels = [
  {
    id: 1,
    name: "فندق ضيافة الرجاء",
    location: "شارع إبراهيم الخليل – يبعد 800 متر عن الحرم",
    image: image1,
  },
  {
    id: 2,
    name: "فندق فلسطين",
    location: "شارع إبراهيم الخليل – قريب من الحرم",
    image: image2,
  },
  {
    id: 3,
    name: "أركان بكه",
    location: "العزيزية – 5 دقائق من الحرم",
    image: image3,
  },
  {
    id: 4,
    name: "هيلدلي إن",
    location: "العزيزية – قريب من المسجد الحرام",
    image: image4,
  },
  {
    id: 5,
    name: "منى كونكورد",
    location: "العزيزية – 4.5 كم من الحرم",
    image: image5,
  },
  {
    id: 6,
    name: "فندق مكة ميلينيوم",
    location: "أبراج البيت – أمام الحرم",
    image: image6,
  },
  // {
  //   id: 7,
  //   name: "قصر رزق",
  //   location: "العزيزية – مكة المكرمة",
  //   image: image7,
  //   large: true,
  // },
];

function Hotels() {
  return (
    <div className="hotels-wrapper">

      <h2>الفنادق</h2>

      <div className="hotels-grid">
        {hotels.map((hotel) => (
          <Link
            to={`/hotels/${hotel.id}`}
            key={hotel.id}
            className={`hotel-card ${hotel.large ? "large" : ""}`}
          >

            <img src={hotel.image} alt={hotel.name} className="hotel-image" />

            <div className="hotel-content">
              <h3>{hotel.name}</h3>
              <p className="location">{hotel.location}</p>
            </div>

          </Link>
        ))}
      </div>

    </div>
  );
}

export default Hotels;
