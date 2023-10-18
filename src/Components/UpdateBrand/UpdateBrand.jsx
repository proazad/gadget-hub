import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UpdateBrand = () => {
  const { user } = useContext(AuthContext);
  const loadedBrand = useLoaderData();
  const handleUpdateBrand = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const brandName = form.get("brandName").trim();
    const brandImage = form.get("brandImage").trim();
    const brandDescription = form.get("brandDescription").trim();
    const userName = user.displayName;
    const userEmail = user.email;
    const userId = user.uid;
    const updateBrand = {
      brandName,
      brandImage,
      brandDescription,
      userName,
      userEmail,
      userId,
    };
    fetch(`http://localhost:5000/brands/${loadedBrand._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBrand),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount>0) {
          swal("Cool!", "Brand Updated Successfully", "success");
        }
      });
  };
  return (
    <div className="w-full ">
      <h2 className="text-3xl font-bold uppercase mb-5 text-center underline">
        Update Brand
      </h2>
      <form onSubmit={handleUpdateBrand}>
        <div className="flex gap-5 mt-3">
          <div className="form-control w-full relative">
            <label htmlFor="brandName" className="font-medium font-xl">
              Brand Name
            </label>
            <input
              type="text"
              name="brandName"
              id="brandName"
              className="input input-bordered input-info"
              defaultValue={loadedBrand.brandName}
              required
            />
            <span className="text-red-700 text-2xl absolute right-0">*</span>
          </div>
          <div className="form-control w-full relative">
            <label htmlFor="brandImage" className="font-medium font-xl">
              Brand Image
            </label>
            <input
              type="url"
              name="brandImage"
              id="brandImage"
              className="input input-bordered input-info"
              defaultValue={loadedBrand.brandImage}
              required
            />
            <span className="text-red-700 text-2xl absolute right-0">*</span>
          </div>
        </div>

        <div className="form-control mt-3 relative">
          <label htmlFor="brandDescription" className="font-medium font-xl">
            Brand Description
          </label>
          <textarea
            className="textarea textarea-accent"
            id="brandDescription"
            name="brandDescription"
            defaultValue={loadedBrand.brandDescription}
          ></textarea>
          <span className="text-red-700 text-2xl absolute right-0">*</span>
        </div>
        <div className="form-control mt-3">
          <button type="submit" className="btn btn-accent">
           Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBrand;
