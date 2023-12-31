import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";
const AllProduct = () => {
  const allProducts = useLoaderData();
  const [products, setproducts] = useState(allProducts);
  const handleDeleteProduct = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://y-delta-nine.vercel.app/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainProduct = products.filter(
                (product) => product._id !== id
              );
              setproducts(remainProduct);
              swal("Poof! Your produc  has been deleted!", {
                icon: "success",
              });
            }
          });
      } else {
        swal("Your product is safe!");
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold"> All Product</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Featured</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {products.map((product, idx) => (
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
                <td className="flex flex-col lg:flex-row space-x-4">
                  <Link
                    to={`/user/productupdate/${product._id}`}
                    className="btn btn-sm btn-accent"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProduct;
