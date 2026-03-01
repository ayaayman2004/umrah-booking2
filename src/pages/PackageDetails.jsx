import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import image1 from "./imgs/img1.png";
import image2 from "./imgs/img2.png";
import image3 from "./imgs/img3.png";

const packages = [
  {
    id: 1,
    name: "الباقة الأولى",
    stars: 4,
    image: image1,
    details: "ثلاثة ايام مكة فقط او مكة والمدينة"
  },
  {
    id: 2,
    name: " الباقة الثانية",
   
    stars: 5,
    image: image2,
    details: " خمسة ايام مكة فقط او مكة والمدينة"
  },
  {
    id: 3,
    name: "الباقة الثالثة (VIP)",
    
    stars: 5,
    image: image3,
    details: " ثلاثة ايام مكة فقط"
  }
];

const whatsappNumber = "201234567890";

function Packages() {
  return (
    <div className="packages-list">

      <h2>باقات العمرة</h2>

      {packages.map((p, index) => (
        <motion.div
          key={p.id}
          className="package-item"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.15 }}
        >

          <img src={p.image} alt={p.name} className="package-image" />

          <div className="package-content">

            <h3>{p.name}</h3>

            <div className="stars">
              {[1,2,3,4,5].map((i) => (
                <FaStar
                  key={i}
                  color={i <= p.stars ? "gold" : "#ccc"}
                />
              ))}
            </div>

            <p>{p.details}</p>
            
            <div className="package-buttons">
              <a href="/booking" className="btn-book">احجز الآن</a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                className="btn-whatsapp"
              >
                واتساب
              </a>
            </div>

          </div>
        </motion.div>
      ))}

    </div>
  );
}

export default Packages;