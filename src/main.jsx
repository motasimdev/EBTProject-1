import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/layouts/Root";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import ProductDetails from "./components/pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root, //import Root.jsx
    children: [
      { index: true, Component: Home }, //import Home.jsx
      { path: "about", Component: About },
      { path: "shop", Component: Shop },
      { path: "productdetails/:id", Component: ProductDetails },
      //{ path: "blog", Component: Blog },
      //{ path: "contact", Component: Contact },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
