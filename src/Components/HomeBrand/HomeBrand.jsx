import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="grid grid-cols-6  gap-3">
        {brands.map((brand) => (
          <Link to={`/products/${brand.brandName}`} key={brand._id} className="border rounded-lg p-5 flex items-center justify-center">
            <img src={brand.brandImage} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeBrand;
