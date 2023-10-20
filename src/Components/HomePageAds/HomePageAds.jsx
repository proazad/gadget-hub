// Import Swiper React components
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../Layout/BrandProduct/styles.css";
// import required modules
import { useEffect } from "react";
import { Navigation, Pagination } from "swiper/modules";
const HomePageAds = () => {
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    fetch("./brandSlider.json")
      .then((res) => res.json())
      .then((data) => setSliders(data));
  }, []);
  return (
    <div className="bg-slate-100 my-20">
      <div className="container mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {sliders.map((slider) => (
            <SwiperSlide key={slider._id} className="relative">
              <img
                src={slider.image}
                alt=""
              />
              <div className="absolute w-full flex items-center justify-center flex-col py-20 px-10 lg:px-20 bg-violet-600/25">
                <h2 className="text-2xl lg:text-5xl font-bold text-accent">
                {slider.title}
                </h2>
                <h2 className="text-xl lg:text-3xl font-bold text-neutral">
                {slider.description}
                </h2>
                <h2 className="text-lg lg:text-3xl font-bold text-accent">
                ${slider.price}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePageAds;
