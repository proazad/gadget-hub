import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <Link to="/" className="font-bold normal-case text-xl">
          <img
            src="https://i.ibb.co/jvh3JxB/logo.png"
            className="w-24"
            alt=""
          />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
