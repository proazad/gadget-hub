import { useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const location =  useLocation();
  return (
    <header>
      <Navbar />
      {location.pathname === '/' ? <Banner />: ""}
      
    </header>
  );
};

export default Header;
