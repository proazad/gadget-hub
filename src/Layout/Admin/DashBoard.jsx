import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "./Navbar/Navbar";
import RightSidebar from "../../Components/RightSidebar/RightSidebar";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-blue-100">
      <div className="container mx-auto">
        <Navbar />
        <div className="grid grid-cols-1 lg:grid-cols-6 py-5 lg:py-20 gap-5">
          <div className="lg:col-span-2 border border-blue-400 rounded-xl p-4">
            <div className="flex items-center   gap-4 mb-20">
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user?.photoURL || "https://i.ibb.co/2ndnLqH/avatar.jpg"
                    }
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-neutral">
                  {user.displayName}
                </h2>
                <h3 className="text-lg  text-neutral">
                  {user.email}
                </h3>
              </div>
            </div>
            <RightSidebar />
          </div>
          <div className="lg:col-span-4 border border-blue-400 rounded-xl p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
