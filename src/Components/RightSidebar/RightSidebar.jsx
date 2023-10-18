import { useContext } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BiCarousel, BiLogoProductHunt } from "react-icons/bi";
import { BsWallet2 } from "react-icons/bs";
import { MdAddTask, MdOutlineDashboard } from "react-icons/md";
import { TbBrandGoogleFit } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const RightSidebar = () => {
  const { userSignOut } = useContext(AuthContext);

  return (
    <>
      <ul className="menu menu-vertical gap-3 px-1">
        <li>
          <NavLink
            to="/admin"
            className="px-3 text-xl flex gap-4 items-center font-bold"
          >
            <MdOutlineDashboard />
            DashBoard
          </NavLink>
        </li>
        <li tabIndex={0}>
          <details>
            <summary className="text-xl bg-neutral text-white font-bold">
              <BiLogoProductHunt/>Product
            </summary>
            <ul className="p-2">
              <li>
                <NavLink
                  to="/admin/allproduct"
                  className="px-3 text-xl flex gap-4 items-center font-bold"
                >
                  <BsWallet2 />
                  All Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/addproduct"
                  className="px-3 text-xl flex gap-4 items-center font-bold"
                >
                  <MdAddTask />
                  Add New Product
                </NavLink>
              </li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary className="text-xl bg-neutral text-white font-bold">
              <TbBrandGoogleFit />
              Brand
            </summary>
            <ul className="p-2">
              <li>
                <NavLink
                  to="/admin/allbrand"
                  className="px-3 text-xl flex gap-4 items-center font-bold"
                >
                  <BsWallet2 />
                  All Brand
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/addbrand"
                  className="px-3 text-xl flex gap-4 items-center font-bold"
                >
                  <MdAddTask />
                  Add New Brand
                </NavLink>
              </li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary className="text-xl bg-neutral text-white font-bold">
              <BiCarousel />
              Slider
            </summary>
            <ul className="p-2">
              <li>
                <NavLink
                  to="/admin/allslider"
                  className="px-3 text-xl flex gap-4 items-center font-bold"
                >
                  <BsWallet2 />
                  All Slider
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/addslider"
                  className="px-3 text-xl flex gap-4 items-center font-bold"
                >
                  <MdAddTask />
                  Add New Product
                </NavLink>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <button
            onClick={() => userSignOut()}
            className="px-3 text-xl flex gap-4 items-center font-bold"
          >
            <AiOutlineLogout />
            Signout
          </button>
        </li>
      </ul>
    </>
  );
};

export default RightSidebar;
