import { createBrowserRouter } from "react-router-dom";
import AddBrand from "../Components/AddBrand/AddBrand";
import AddBrandSlider from "../Components/AddBrandSlider/AddBrandSlider";
import AddProduct from "../Components/AddProduct/AddProduct";
import AddSlider from "../Components/AddSlider/AddSlider";
import AllBrand from "../Components/AllBrand/AllBrand";
import AllBrandSlider from "../Components/AllBrandSlider/AllBrandSlider";
import AllProduct from "../Components/AllProduct/AllProduct";
import Allslider from "../Components/Allslider/Allslider";
import UpdateBrand from "../Components/UpdateBrand/UpdateBrand";
import UpdateBrandSlider from "../Components/UpdateBrandSlider/UpdateBrandSlider";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";
import UpdateSlider from "../Components/UpdateSlider/UpdateSlider";
import DashBoard from "../Layout/Admin/DashBoard";
import BrandProduct from "../Layout/BrandProduct/BrandProduct";
import CartPage from "../Layout/CartPage/CartPage";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import Home from "../Layout/Home/Home";
import PrivateRouter from "../Layout/PrivateRouter/PrivateRouter";
import ProductDetails from "../Layout/ProductDetails/ProductDetails";
import Products from "../Layout/Products/Products";
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
        path: "/products",
        element: <Products />,
        loader: () => fetch("https://y-delta-nine.vercel.app/products"),
      },
      {
        path: "/brand/:id",
        element: <BrandProduct />,
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRouter>
            <ProductDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://y-delta-nine.vercel.app/products/${params.id}`),
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
    path: "/user",
    element: (
      <PrivateRouter>
        <DashBoard />
      </PrivateRouter>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/user/profile",
        element: <Profile />,
      },
      {
        path: "/user/allproduct",
        element: <AllProduct />,
        loader: () => fetch("https://y-delta-nine.vercel.app/products"),
      },
      {
        path: "/user/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/user/productupdate/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(`https://y-delta-nine.vercel.app/products/${params.id}`),
      },
      {
        path: "/user/allbrand",
        element: <AllBrand />,
        loader: () => fetch("https://y-delta-nine.vercel.app/brands"),
      },
      {
        path: "/user/addbrand",
        element: <AddBrand />,
      },
      {
        path: "/user/brandupdate/:id",
        element: <UpdateBrand />,
        loader: ({ params }) =>
          fetch(`https://y-delta-nine.vercel.app/brands/${params.id}`),
      },

      {
        path: "/user/addslider",
        element: <AddSlider />,
      },
      {
        path: "/user/allslider",
        element: <Allslider />,
        loader: () => fetch("https://y-delta-nine.vercel.app/sliders"),
      },
      {
        path: "/user/updateslider/:id",
        element: <UpdateSlider />,
        loader: ({ params }) =>
          fetch(`https://y-delta-nine.vercel.app/sliders/${params.id}`),
      },

      {
        path: "/user/cart/",
        element: <CartPage/>,
        loader: () =>
          fetch("https://y-delta-nine.vercel.app/carts"),
      },

      {
        path: "/user/addbrandslider",
        element: <AddBrandSlider />,
      },
      {
        path: "/user/allbrandslider",
        element: <AllBrandSlider />,
        loader: () => fetch("https://y-delta-nine.vercel.app/brandsliders"),
      },
      {
        path: "/user/updatebrandslider/:id",
        element: <UpdateBrandSlider />,
        loader: ({ params }) =>
          fetch(`https://y-delta-nine.vercel.app/brandsliders/${params.id}`),
      },
    ],
  },
]);

export default Router;
