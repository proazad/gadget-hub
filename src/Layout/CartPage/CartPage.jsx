import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CartPage = () => {
  const allproducts = useLoaderData();
  const [products, setproducts] = useState(allproducts);
  const { user } = useContext(AuthContext);
  const userId = user.uid;

  const userCartProduct = products.filter(
    (product) => product.userId === userId
  );
  
  const totalPrice = userCartProduct.reduce((accumulator, currentProduct) => {
    return parseInt(accumulator, 10) + parseInt(currentProduct.productPrice);
  }, 0);

  const handleDeleteProductFromCart = (id) => {
    fetch(`https://y-delta-nine.vercel.app/carts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainProduct = products.filter(
            (product) => product._id !== id
          );
          setproducts(remainProduct);
        }
      });
  };
  const handleParshase = () => {
    swal("Super!", "You Purshase product successfully", "success");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">
        Your Cart have {userCartProduct.length} Product
      </h2>
      <h2 className="text-2xl font-semibold">Total Price: $ {totalPrice} </h2>
      <table className="table mt-5">
        {/* head */}
        <thead>
          <tr>
            <th>S/L</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userCartProduct.map((product, idx) => (
            <tr key={product._id}>
              <th>{idx + 1}</th>
              <td>
                <img
                  src={product.productImage}
                  className="w-16 rounded-md"
                  alt=""
                />
              </td>
              <td>{product.productName}</td>
              <td>{product.productPrice}</td>
              <td>{product.productFeatured}</td>
              <td className="space-x-4 w-[260px]">
                <button
                  onClick={() => handleDeleteProductFromCart(product._id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        {" "}
        <button onClick={handleParshase} className="btn btn-accent btn-wide">
          Purshase
        </button>
      </div>
    </div>
  );
};

export default CartPage;
