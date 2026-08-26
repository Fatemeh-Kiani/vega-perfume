import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";
import AccountPage from "../pages/AccountPage";
import WishlistPage from "../pages/WishlistPage";
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

      path: "/wishlist",

      element: <WishlistPage />,

    },
    ],
  },
],
);