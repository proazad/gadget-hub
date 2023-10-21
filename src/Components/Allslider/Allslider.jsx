import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const Allslider = () => {
  const AllSliders = useLoaderData();
  const [sliders, setSliders] = useState(AllSliders);
  const handleDeleteSlider = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://y-delta-nine.vercel.app/sliders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainslider = sliders.filter(
                (slider) => slider._id !== id
              );
              setSliders(remainslider);
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            }
          });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold"> All Slider</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sliders.map((slider, idx) => (
              <tr key={slider._id}>
                <th>{idx + 1}</th>
                <td>
                  <img
                    src={slider.sliderImage}
                    className="w-16 rounded-md"
                    alt=""
                  />
                </td>
                <td>{slider.sliderTitle}</td>
                <td>{slider.sliderDescription}</td>
                <td className="space-x-4 w-[260px]">
                  <Link
                    to={`/user/updateslider/${slider._id}`}
                    className="btn btn-accent"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDeleteSlider(slider._id)}
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

export default Allslider;
