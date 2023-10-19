import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./brand.css";
const HomeBrand = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-semibold my-10">Shop by Brand</h2>
      <div className="cards grid grid-cols-2 grid-cols-6  gap-3">
        {brands.map((brand) => (
          <Link
            to={`/brand/${brand.brandName}`}
            key={brand._id}
            className="card relative border rounded-lg p-5"
          >
            <img src={brand.brandImage} alt="" />
            <p className="title absolute bg-neutral rounded-lg py-2 px-4">{brand.brandName}</p>
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
