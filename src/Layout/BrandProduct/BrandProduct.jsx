import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://i.ibb.co/b1pFHRy/main-home-rev-img-2.jpg"
                alt=""
              />
              <div className="absolute left-0 top-20">
                <h2 className="text-4xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio autem voluptate saepe ipsum illo voluptates unde, </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/b1pFHRy/main-home-rev-img-2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/b1pFHRy/main-home-rev-img-2.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <h2 className="text-4xl font-bold">{id}</h2>
      <div className="grid  mt-10 grid-cols-1 lg:grid-cols-4 gap-5">
        {brandProducts?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BrandProduct;
