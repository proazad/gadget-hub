import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const HomeAllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://y-8f8vh8oo5-summer-sale-azad.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold my-10 mx-3 lg:mx-0">
          {" "}
          All Products
        </h2>
        <div className=" grid  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAllProducts;
