import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateProduct = () => {
  const loadedProduct = useLoaderData();
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const productName = form.get("productName").trim();
    const brandName = form.get("brandName").trim();
    const productPrice = form.get("productPrice").trim();
    const productCat = form.get("productCat").trim();
    const productRating = form.get("productRating").trim();
    const productImage = form.get("productImage").trim();
    const productDescription = form.get("productDescription").trim();
    const productFeatured = form.get("productFeatured");
    const productHotSale = form.get("productHotSale");
    const updatPproduct = {
      productName,
      brandName,
      productCat,
      productPrice,
      productRating,
      productImage,
      productDescription,
      productFeatured,
      productHotSale
    };
    console.log(updatPproduct);
    fetch(`https://y-delta-nine.vercel.app/products/${loadedProduct._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatPproduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal("Cool!", "Product Updated Successfully", "success");
        }
      });
  };
  return (
    <div className="w-full ">
      <h2 className="text-3xl font-bold uppercase mb-5 text-center underline">
        Update Product
      </h2>
      <form onSubmit={handleUpdateProduct}>
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
              defaultValue={loadedProduct.productName}
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
              defaultValue={loadedProduct.brandName}
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
              defaultValue={loadedProduct.productCat}
              className="select select-bordered select-info w-full"
            >
              <option disabled>Select Product Categroy</option>
              <option value="computer">Desktop</option>
              <option value="laptop">Laptop</option>
              <option value="mobile">Mobile</option>
              <option value="camera">Camera</option>
              <option value="headphone">Headphone</option>
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
              defaultValue={loadedProduct.productPrice}
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
              defaultValue={loadedProduct.productRating}
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
              defaultValue={loadedProduct.productImage}
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
            defaultValue={loadedProduct.productDescription}
          ></textarea>
          <span className="text-red-700 text-2xl absolute right-0">*</span>
        </div>
        <div className="flex gap-5 mt-3">
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text text-xl mr-4">Is Featured?</span>
              <input
                type="checkbox"
                name="productFeatured"
                className="checkbox checkbox-accent"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text text-xl mr-4">Hot Sale?</span>
              <input
                type="checkbox"
                name="productHotSale"
                className="checkbox checkbox-accent"
              />
            </label>
          </div>
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

export default UpdateProduct;
