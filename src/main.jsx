import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Roots from "./Components/Roots.jsx";
import Home from "./Components/Home.jsx";
import RegisTer from "./Components/RegisTer.jsx";
import LogIn from "./Components/LogIn.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Orders from "./Components/Orders.jsx";
import PrivateRoutes from "./Routs/PrivateRoutes.jsx";
import Profile from "./Components/Profile.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <RegisTer></RegisTer>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoutes>
            <Orders></Orders>
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
