const AddProduct = () => {
  const handleNewProduct = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const productName = form.get("productName").trim();
    const brandName = form.get("brandName").trim();
    const productPrice = form.get("productPrice").trim();
    const productRating = form.get("productRating").trim();
    const productImage = form.get("productImage").trim();

    
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
            <select className="select select-bordered select-info w-full">
              <option disabled selected>
                Select Product Categroy
              </option>
              <option value="computer">DeshTop</option>
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
