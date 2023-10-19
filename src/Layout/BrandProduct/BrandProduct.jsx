import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";

const BrandProduct = () => {
  const { id } = useParams();
  const [brandProducts, setbrandProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => {
        const brandPro = data.filter(
          (product) => product.brandName.toLowerCase() === id.toLowerCase()
        );
        setbrandProducts(brandPro);
      });
  }, [id]);
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-4xl font-bold">{id}</h2>
      <div className="grid  mt-10 grid-cols-1 lg:grid-cols-4 gap-5">
        {brandProducts?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BrandProduct;
