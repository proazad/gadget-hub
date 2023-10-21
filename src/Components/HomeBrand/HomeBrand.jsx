import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./brand.css";
const HomeBrand = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("https://y-delta-nine.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-semibold my-10 px-3 lg:px-0">
        Shop by Brand
      </h2>
      <div className="cards grid grid-cols-2 lg:grid-cols-6  gap-3 px-3 lg:px-0">
        {brands.map((brand) => (
          <Link
            to={`/brand/${brand.brandName}`}
            key={brand._id}
            className="flip-card"
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={brand.brandImage} alt="" />
              </div>
              <div className="flip-card-back px-5">
                <p className="text-xl title">{brand.brandName}</p>
                <p className="text-neutral ">View This Brand Product</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeBrand;

<div className="cards">
  <div className="card red">
    <p className="tip">Hover Me</p>
    <p className="second-text">Lorem Ipsum</p>
  </div>
</div>;
