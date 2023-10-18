import { BsWallet2 } from "react-icons/bs";
import { MdAddTask, MdOutlineDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
const RightSidebar = () => {
  return (
    <>
      <ul className="menu menu-vertical gap-3 px-1">
        <li className="bg-white shadow-md rounded hover:bg-slate-500 hover:text-white duration-500">
          <NavLink
            to="/admin"
            className="px-3 text-xl flex gap-4 items-center font-bold"
          >
            <MdOutlineDashboard />
            DashBoard
          </NavLink>
        </li>
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
    </>
  );
};

export default RightSidebar;
