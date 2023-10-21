import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const BrandProduct = () => {
  const { id } = useParams();
  const [brandProducts, setbrandProducts] = useState([]);
  const allslider = useLoaderData();
  const brandSlider = allslider?.filter(
    (slider) => slider.sliderBrand.toLowerCase() === id.toLowerCase()
  );
  useEffect(() => {
    fetch(`https://y-delta-nine.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        const brandPro = data.filter(
          (product) => product.brandName.toLowerCase() === id.toLowerCase()
        );
        setbrandProducts(brandPro);
      });
  }, [id]);
  return (
    <div className="container mx-auto mt-10">
      <div>
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
          {brandSlider?.map((slider) => (
            <SwiperSlide key={slider._id} className="relative">
            <img
              src={slider.sliderImage}
              alt=""
              className="max-h-screen"
            />
            <div className="absolute w-full flex items-center justify-center flex-col py-20 px-10 lg:px-20 bg-violet-600/25">
              <h2 className="text-2xl lg:text-5xl font-bold text-accent">
              {slider.sliderTitle}
              </h2>
              <h2 className="text-xl lg:text-3xl font-bold text-neutral">
              {slider.sliderDescription}
              </h2>
              <h2 className="text-lg lg:text-3xl font-bold text-accent">
              ${slider.price}
              </h2>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h2 className="text-2xl lg:text-4xl font-bold px-3 lg:px-0">{id}</h2>
      <div className="grid  mt-10 grid-cols-1 lg:grid-cols-4 gap-5 px-3 lg:px-0">
        {brandProducts?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
        {brandSlider.length === 0 && (
          <h2 className="col-span-4 text-2xl lg:text-4xl text-center">
            No Product Found under this Brand
          </h2>
        )}
      </div>
    </div>
  );
};

export default BrandProduct;
