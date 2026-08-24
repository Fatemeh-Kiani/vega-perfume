import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";

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

      // --------------------------------------------------
      // PRODUCT FILTERS
      // --------------------------------------------------

      {
        path: "products/gender/:gender",
        element: <ProductsPage />,
      },

      {
        path: "products/fragrance/:fragrance",
        element: <ProductsPage />,
      },

      {
        path: "products/season/:season",
        element: <ProductsPage />,
      },

      {
        path: "products/brand/:brand",
        element: <ProductsPage />,
      },

      {
        path: "products/category/:category",
        element: <ProductsPage />,
      },

      {
        path: "products/subcategory/:subcategory",
        element: <ProductsPage />,
      },

      {
        path: "products/collection/:collection",
        element: <ProductsPage />,
      },

      // ==================================================
      // PRODUCT DETAIL
      // ==================================================

      {
        path: "products/:slug",
        element: <ProductPage />,
      },
    ],
  },
]);