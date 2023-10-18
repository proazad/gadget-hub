import { useContext } from "react";
import { BsWallet2 } from "react-icons/bs";
import { MdAddTask, MdOutlineDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
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
            <summary>Product</summary>
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

        <li>
          <button
            onClick={() => userSignOut()}
            className="px-3 text-xl flex gap-4 items-center font-bold"
          >
            <MdAddTask />
            Signout
          </button>
        </li>
      </ul>
    </>
  );
};

export default RightSidebar;
