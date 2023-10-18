import { createBrowserRouter } from "react-router-dom";
import AddBrand from "../Components/AddBrand/AddBrand";
import AddProduct from "../Components/AddProduct/AddProduct";
import AddSlider from "../Components/AddSlider/AddSlider";
import AllBrand from "../Components/AllBrand/AllBrand";
import AllProduct from "../Components/AllProduct/AllProduct";
import Allslider from "../Components/Allslider/Allslider";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";
import DashBoard from "../Layout/Admin/DashBoard";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import Home from "../Layout/Home/Home";
import PrivateRouter from "../Layout/PrivateRouter/PrivateRouter";
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
    element: (
      <PrivateRouter>
        <DashBoard />
      </PrivateRouter>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin/profile",
        element: <Profile />,
      },
      {
        path: "/admin/allproduct",
        element: <AllProduct />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/admin/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/admin/productupdate/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/admin/allbrand",
        element: <AllBrand />,
      },
      {
        path: "/admin/addbrand",
        element: <AddBrand />,
      },
      {
        path: "/admin/addslider",
        element: <AddSlider />,
      },
      {
        path: "/admin/allslider",
        element: <Allslider />,
      },
    ],
  },
]);

export default Router;
