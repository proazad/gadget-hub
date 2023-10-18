import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import RightSidebar from "./RightSidebar/RightSidebar";

const DashBoard = () => {
  return (
    <div className="bg-blue-100">
      <div className="container mx-auto">
        <Navbar />
        <div className="grid grid-cols-1 lg:grid-cols-4 py-20 gap-5">
          <div className="col-span-1 border border-blue-400 rounded-xl p-4">
            <div className="flex items-center   gap-4 mb-20">
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                  <img src="https://i.ibb.co/LPY431r/azad.jpg" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-neutral">
                  Azad Hossain
                </h2>
                <h3 className="text-xl font-semibold text-neutral">Admin</h3>
              </div>
            </div>
            <RightSidebar />
          </div>
          <div className="col-span-3 border border-blue-400 rounded-xl p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
