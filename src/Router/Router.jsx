import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../Layout/Admin/AddProduct/AddProduct";
import AllProduct from "../Layout/Admin/AllProduct/AllProduct";
import DashBoard from "../Layout/Admin/DashBoard";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import Home from "../Layout/Home/Home";
import Profile from "../Layout/Profile/Profile";
import Root from "../Layout/Root/Root";
import Signin from "../Layout/Signin/Signin";
import Signup from "../Layout/Signup/Signup";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashBoard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin/profile",
        element: <Profile />
      },
      {
        path: "/admin/allproduct",
        element: <AllProduct />
      },
      {
        path: "/admin/addproduct",
        element: <AddProduct />
      },
    ],
  },
]);

export default Router;
