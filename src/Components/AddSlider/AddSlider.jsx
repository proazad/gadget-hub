import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddSlider = () => {
  const { user } = useContext(AuthContext);
  const handleNewSlider = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const sliderTitle = form.get("sliderTitle").trim();
    const sliderImage = form.get("sliderImage").trim();
    const sliderDescription = form.get("sliderDescription").trim();
    const userName = user.displayName;
    const userEmail = user.email;
    const userId = user.uid;
    const slider = {
      sliderTitle,
      sliderImage,
      sliderDescription,
      userName,
      userEmail,
      userId,
    };
    fetch("http://localhost:5000/sliders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(slider),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal("Cool!", "Slider Added Successfully", "success");
          e.target.reset();
        }
      });
  };
  return (
    <div className="w-full ">
      <h2 className="text-3xl font-bold uppercase mb-5 text-center underline">
        Add a New Slider
      </h2>
      <form onSubmit={handleNewSlider}>
        <div className="flex gap-5 mt-3">
          <div className="form-control w-full relative">
            <label htmlFor="sliderTitle" className="font-medium font-xl">
             Slider Title
            </label>
            <input
              type="text"
              name="sliderTitle"
              id="sliderTitle"
              className="input input-bordered input-info"
              placeholder="Enter Slider Title"
              required
            />
            <span className="text-red-700 text-2xl absolute right-0">*</span>
          </div>
          <div className="form-control w-full relative">
            <label htmlFor="sliderImage" className="font-medium font-xl">
              Slider Image
            </label>
            <input
              type="url"
              name="sliderImage"
              id="sliderImage"
              className="input input-bordered input-info"
              placeholder="Enter Slider Image Url"
              required
            />
            <span className="text-red-700 text-2xl absolute right-0">*</span>
          </div>
        </div>

        <div className="form-control mt-3 relative">
          <label htmlFor="sliderDescription" className="font-medium font-xl">
            Slider Description
          </label>
          <textarea
            className="textarea textarea-accent"
            id="sliderDescription"
            name="sliderDescription"
            placeholder="Add Product Description"
          ></textarea>
          <span className="text-red-700 text-2xl absolute right-0">*</span>
        </div>
        <div className="form-control mt-3">
          <button type="submit" className="btn btn-accent">
            Add New Slider
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSlider;
