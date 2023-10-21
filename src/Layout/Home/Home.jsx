import FeatureProduct from "../../Components/FeatureProduct/FeatureProduct";
import HomeAllProducts from "../../Components/HomeAllProducts/HomeAllProducts";
import HomeBrand from "../../Components/HomeBrand/HomeBrand";
import HomePage3Product from "../../Components/HomePage3Product/HomePage3Product";
import HomePageAds from "../../Components/HomePageAds/HomePageAds";

const Home = () => {
  return (
    <>
      <HomePage3Product />
      <FeatureProduct />
      <HomeBrand />
      <HomeAllProducts />
      <HomePageAds />
    </>
  );
};

export default Home;
