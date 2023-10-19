import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Products = () => {
  const allproducts = useLoaderData();
  const hotsale = allproducts?.filter((item) => item.productHotSale);
  const featured = allproducts?.filter((item) => item.productFeatured);
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-semibold my-5">New Arraival</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {allproducts.slice(-4)?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      <h2 className="text-4xl font-semibold mt-16 mb-5">Hot Sale</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {hotsale.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>

      <h2 className="text-4xl font-semibold mt-16 mb-5">Featured Product</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {featured.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
