import PropTypes from "prop-types";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { MdCompareArrows } from "react-icons/md";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { _id, productName, brandName, productImage, productPrice } = product;
  const handleFavorite = (product) => {
    console.log(product);
  };
  return (
    <div className=" h-full border rounded-xl shadow-sm flex flex-col flex-end">
      <div className="flex justify-between p-3">
        <h4 className="text-accent font-medium">{brandName}</h4>
        <p className="space-y-4">
          <AiOutlineHeart
            onClick={() => handleFavorite(product)}
            className="cursor-pointer text-xl"
          />
          <MdCompareArrows className="cursor-pointer text-xl" />
        </p>
      </div>
      <div className="flex flex-grow p-5 items-center justify-center">
        <img src={productImage} className="w-auto h-40" alt={productName} />
      </div>
      <div className="p-3 flex-grow">
        <h3 className="text-lg font-semibold">{productName}</h3>
        <h3 className="text-lg text-accent font-semibold">${productPrice}</h3>
      </div>
      <Link to={`/products/${_id}`} className="flex px-5 justify-between text-white py-5 rounded-b-xl bg-accent">
        <span className="text-xl">View Details</span>
        <BsCartPlus className="text-xl" />
      </Link>
    </div>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  product: PropTypes.object,
};
