import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const userId = user?.uid;
  const [castsprods, setCartsprods] = useState([]);
  useEffect(() => {
    fetch("https://y-delta-nine.vercel.app/carts")
      .then((res) => res.json())
      .then((data) => {
        const userCartProduct = data.filter(
          (product) => product.userId === userId
        );
        setCartsprods(userCartProduct);
      });
  }, [userId]);
  const totalPrice = castsprods.reduce((accumulator, currentProduct) => {
    return parseInt(accumulator, 10) + parseInt(currentProduct.productPrice);
  }, 0);
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      {user ? (
        ""
      ) : (
        <li>
          <NavLink to="/signin">Signin</NavLink>
        </li>
      )}
      {user ?  (
        <li>
          <NavLink to="/user/cart">My Cart</NavLink>
        </li>
      ): ""}
    </>
  );
  return (
    <nav className="container mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <Link to="/" className="font-bold normal-case text-xl">
          <img
            src="https://i.ibb.co/jvh3JxB/logo.png"
            className="w-24"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {castsprods.length}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[999] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">
                {castsprods.length} Items
              </span>
              <span className="text-info">Subtotal: {totalPrice}</span>
              <div className="card-actions">
                <Link to="/user/cart" className="btn btn-primary btn-block">
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src={user?.photoURL || "https://i.ibb.co/2ndnLqH/avatar.jpg"}
              />
            </div>
          </label>
          {user && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user ? (
                <li>
                  <Link to="/user" className="justify-between">
                    {user?.displayName}
                    <span className="badge">Profile</span>
                  </Link>
                </li>
              ) : (
                ""
              )}

              {user ? (
                <li>
                  <button onClick={() => userSignOut()}>Logout</button>
                </li>
              ) : (
                ""
              )}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
