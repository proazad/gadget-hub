import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const handleNewProduct = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const productName = form.get("productName").trim();
    const brandName = form.get("brandName").trim();
    const productPrice = form.get("productPrice").trim();
    const productCat = form.get("productCat").trim();
    const productRating = form.get("productRating").trim();
    const productImage = form.get("productImage").trim();
    const productDescription = form.get("productDescription").trim();
    const userName = user.displayName;
    const userEmail = user.email;
    const userId = user.uid;
    const product = {
      productName,
      brandName,
      productCat,
      productPrice,
      productRating,
      productImage,
      productDescription,
      userName,
      userEmail,
      userId,
    };
    fetch("https://y-delta-nine.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal("Cool!", "Product Added Success fully", "success");
          e.target.reset();
        }
      });
  };
  return (
    <div className="w-full ">
      <h2 className="text-3xl font-bold uppercase mb-5 text-center underline">
        Add a New Product
      </h2>
      <form onSubmit={handleNewProduct}>
        {/* Row for Product Name and Brand Name  */}
        <div className="flex gap-5 mt-3">
          <div className="form-control w-full relative">
            <label htmlFor="productName" className="font-medium font-xl">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              id="productName"
              className="input input-bordered input-info"
              placeholder="Enter Your Product Name"
              required
            />
            <span className="text-red-700 text-2xl absolute right-0">*</span>
          </div>
          <div className="form-control w-full relative">
            <label htmlFor="brandName" className="font-medium font-xl">
              Brand Name
            </label>
            <input
              type="text"
              name="brandName"
              id="brandName"
              className="input input-bordered input-info"
              placeholder="Enter Product Brand Name"
              required
            />
            <span className="text-red-700 text-2xl absolute right-0">*</span>
          </div>
        </div>
        {/* Row  for Product Category and Price  */}
        <div className="flex gap-5 mt-3">
          <div className="form-control w-full relative">
            <label htmlFor="productCategory" className="font-medium font-xl">
              Product Category
            </label>
            <select
              name="productCat"
              className="select select-bordered select-info w-full"
            >
              <option disabled>Select Product Categroy</option>
              <option value="computer">Desktop</option>
              <option value="laptop">Laptop</option>
              <option value="mobile">Mobile</option>
              <option value="camera">Camera</option>
              <option value="headphone">Headphone</option>
              <option value="printer">Printer</option>
              <option value="scaner">Scaner</option>
              <option value="Drone">Drone</option>
              <option value="watch">Watch</option>
              <option value="others">Others</option>
            </select>
            <span className="text-red-700 text-2xl absolute right-0">*</span>
          </div>
          <div className="form-control w-full relative">
            <label htmlFor="productPrice" className="font-medium font-xl">
              Product Price
            </label>
            <input
              type="text"
              name="productPrice"
              id="productPrice"
              className="input input-bordered input-info"
              placeholder="Enter Product Price"
              required
            />
            <span className="text-red-700 text-2xl absolute right-0">*</span>
          </div>
        </div>

        {/* Row  for Product Rating and Photo */}
        <div className="flex gap-5 mt-3">
          <div className="form-control w-full relative">
            <label htmlFor="productRating" className="font-medium font-xl">
              Rating
            </label>
            <input
              type="number"
              name="productRating"
              id="productRating"
              className="input input-bordered input-info"
              max="5"
              min="0"
            />
            <span className="text-red-700 text-2xl absolute right-0">*</span>
          </div>
          <div className="form-control w-full relative">
            <label htmlFor="productImage" className="font-medium font-xl">
              Product Image
            </label>
            <input
              type="url"
              name="productImage"
              id="productImage"
              className="input input-bordered input-info"
              placeholder="Enter Product Image url:  http://example.com/"
              required
            />
            <span className="text-red-700 text-2xl absolute right-0">*</span>
          </div>
        </div>

        <div className="form-control mt-3 relative">
          <label htmlFor="productDescription" className="font-medium font-xl">
            Product Description
          </label>
          <textarea
            className="textarea textarea-accent"
            id="productDescription"
            name="productDescription"
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

export default AddProduct;
