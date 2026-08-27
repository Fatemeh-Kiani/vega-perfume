import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";
import AccountPage from "../pages/AccountPage";
import RegisterPage from "../pages/RegisterPage";
import WishlistPage from "../pages/WishlistPage";
import CartPage from "../pages/CartPage";
import PaymentPage from "../pages/PaymentPage";
import PaymentSuccessPage from "../pages/PaymentSuccessPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // ==================================================
      // HOME
      // ==================================================

      {
        index: true,
        element: <HomePage />,
      },

      // ==================================================
      // PRODUCTS
      // ==================================================

     {
  path: "products",
  element: <ProductsPage />,
},
      {
        path: "products/:slug",
        element: <ProductPage />,
      },
          {
        path: "/account",
        element: <AccountPage />,
      },
            {

        path: "account/register",
        element: <RegisterPage />,

      },
          {

      path: "/wishlist",
      element: <WishlistPage />,

    },
    {
  path: "cart",
  element: <CartPage />,
},

{
  path: "payment",
  element: <PaymentPage />,
},

{
  path: "payment/success",
  element: <PaymentSuccessPage />,
},
    ],
  },
],
);