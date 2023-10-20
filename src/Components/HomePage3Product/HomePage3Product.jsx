import { Link } from "react-router-dom";

const HomePage3Product = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 px-5 lg:px-0">
        <div
          className="bg-cover py-8 rounded-lg px-5"
          style={{
            backgroundImage: `url(https://i.ibb.co/bF4SqL4/main-home-banner-1-img.png)`,
          }}
        >
          <h2 className="text-xl">Game Joysticks</h2>
          <Link to="/products" className="btn btn-sm btn-accent mt-5">Show Now</Link>
        </div>
        <div
          className="bg-cover py-8 rounded-lg px-5"
          style={{
            backgroundImage: `url(https://i.ibb.co/2qqpyWc/main-home-banner-2-img.png)`,
          }}
        >
          <h2 className="text-xl">Monitors & <br /> Keyboards</h2>
          <Link to="/products" className="btn btn-sm btn-accent mt-5">Show Now</Link>
        </div>
        <div
          className="bg-cover py-8 rounded-lg px-5"
          style={{
            backgroundImage: `url(https://i.ibb.co/MnTTDNG/main-home-banner-3-img.png)`,
          }}
        >
          <h2 className="text-xl">Sport Watches</h2>
          <Link to="/products" className="btn btn-sm btn-accent mt-5">Show Now</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage3Product;
