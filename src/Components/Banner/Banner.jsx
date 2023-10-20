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
    <div className="mb-10">
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
            <SwiperSlide key={slider._id} className="bg-[#f3f6fb]">
              <img
                src={slider.sliderImage}
                alt=""
              />
              <div className="absolute w-full flex items-center justify-center flex-col px-8 lg:px-20 py-40 ">
                <h2 className="text-2xl lg:text-5xl mb-5 font-bold text-accent">
                {slider.sliderTitle}
                </h2>
                <h2 className="text-lg lg:text-3xl font-semibold text-black">
                {slider.sliderDescription}
                </h2>
                <Link to="/products" className="btn btn-accent mt-5">Shop Now</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
