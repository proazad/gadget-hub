import PropTypes from "prop-types";
import { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineStar,
  AiTwotoneStar,
} from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const [fav, setFav] = useState(false);
  const {
    _id,
    productName,
    brandName,
    productImage,
    productPrice,
    productRating,
  } = product;

  return (
    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <p onClick={() => setFav(!fav)} className="space-y-4">
        {fav ? (
          <AiFillHeart className="cursor-pointer text-red-600 text-xl" />
        ) : (
          <AiOutlineHeart className="cursor-pointer text-xl" />
        )}
      </p>
      <div className="relative flex items-center justify-center overflow-hidden rounded-xl">
        <img src={productImage} alt={productName} className="h-40" />
      </div>
      <div className="mt-1 p-2 flex-grow ">
        <div className="">
          <h2 className="text-slate-700">{productName}</h2>
          <p className="mt-1 text-sm text-accent">{brandName}</p>
          <p className="mt-1 text-sm text-orange-600">
            <Rating
              initialRating={productRating}
              emptySymbol={<AiOutlineStar />}
              fullSymbol={<AiTwotoneStar />}
              readonly
            />{" "}
            {productRating}
          </p>
        </div>
        <div className="mt-3 flex items-end justify-between">
          <p className="text-lg font-bold text-accent">${productPrice}</p>
          <div className="flex items-center space-x-1.5 rounded-lg bg-accent px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            <Link to={`/products/${_id}`}>
              <button className="text-sm">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  product: PropTypes.object,
};
