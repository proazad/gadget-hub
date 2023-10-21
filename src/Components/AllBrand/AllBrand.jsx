import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const AllBrand = () => {
  const AllBrands = useLoaderData();
  const [brands, setBrands] = useState(AllBrands);
  const handleDeleteBrand = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Brand!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://y-delta-nine.vercel.app/brands/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainbrand = brands.filter((brand) => brand._id !== id);
              setBrands(remainbrand);
              swal("Poof! Your Brand has been deleted!", {
                icon: "success",
              });
            }
          });
      } else {
        swal("Your Brand is safe!");
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold"> All brand</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, idx) => (
              <tr key={brand._id}>
                <th>{idx + 1}</th>
                <td>
                  <img
                    src={brand.brandImage}
                    className="w-16 rounded-md"
                    alt=""
                  />
                </td>
                <td>{brand.brandName}</td>
                <td className="space-x-4 w-[260px]">
                  <Link
                    to={`/user/brandupdate/${brand._id}`}
                    className="btn btn-accent"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDeleteBrand(brand._id)}
                    className="btn btn-error"
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

export default AllBrand;
