import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const FeatureProduct = () => {
  const [featureProduct, setfeatureProduct] = useState([]);
  useEffect(() => {
    fetch("https://y-delta-nine.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        const featuredPro = data.filter((product) => product.productFeatured);
        setfeatureProduct(featuredPro);
      });
  }, []);
  return (
    <div className=" bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-3 px-3 lg:px-0">
          Feature Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 px-3 lg:px-0">
          {featureProduct.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
