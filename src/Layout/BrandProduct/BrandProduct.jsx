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
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
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
