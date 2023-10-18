import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddBrand = () => {
  const { user } = useContext(AuthContext);
  const handleNewBrand = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const brandName = form.get("brandName").trim();
    const brandImage = form.get("brandImage").trim();
    const brandDescription = form.get("brandDescription").trim();
    const userName = user.displayName;
    const userEmail = user.email;
    const userId = user.uid;
    const brand = {
      brandName,
      brandImage,
      brandDescription,
      userName,
      userEmail,
      userId,
    };
    fetch("http://localhost:5000/brands", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brand),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal("Cool!", "Brand Added Successfully", "success");
          e.target.reset();
        }
      });
  };
  return (
    <div className="w-full ">
      <h2 className="text-3xl font-bold uppercase mb-5 text-center underline">
        Add a New Brand
      </h2>
      <form onSubmit={handleNewBrand}>
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
              placeholder="Enter Your Brand Name"
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
              placeholder="Enter Brand Image Url"
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
            placeholder="Add Product Description"
          ></textarea>
          <span className="text-red-700 text-2xl absolute right-0">*</span>
        </div>
        <div className="form-control mt-3">
          <button type="submit" className="btn btn-accent">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBrand;
