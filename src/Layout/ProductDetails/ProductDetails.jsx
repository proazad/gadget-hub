import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center justify-center">
        <div className="col-span-2">
          <img src={product?.productImage} alt="" />
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-semibold">{product?.productName}</h2>
          <h3 className="text-xl font-semibold">
            Brand: <span className="font-normal text-accent">{product?.brandName}</span>
          </h3>
          <h3 className="text-xl font-semibold">
            Price: <span className="font-normal text-accent">${product?.productPrice}</span>
          </h3>
          <h3 className="text-xl font-semibold">
            Category: <span className="font-normal text-accent">{product?.productCat}</span>
          </h3>
          <p className="text-xl">{product?.productDescription}</p>
          <button className="btn btn-accent mt-5">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;