import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Banner = () => {
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    fetch("https://y-delta-nine.vercel.app/sliders")
      .then((res) => res.json())
      .then((data) => setSliders(data));
  }, []);
  return (
    <div className="bg-[#f3f6fb] mb-10">
      <div className="container mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {sliders.map((slider) => (
            <SwiperSlide key={slider._id}>
              <div className="grid grid-cols-4 items-center  px-20  bg-right">
                <div className="col-span-1 text-neutral">
                  <h2 className="text-4xl font-bold">{slider.sliderTitle}</h2>
                  <h2 className="text-lg">
                    {slider.sliderDescription}
                  </h2>
                  <Link to="/products" className="btn btn-accent mt-5">Shop Now</Link>
                </div>
                <div className="col-span-3">
                  <img src={slider.sliderImage} alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
