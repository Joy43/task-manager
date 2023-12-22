import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/authinfo/Login/Login";
import Signup from "../Pages/authinfo/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",

    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <></>,
    children: [],
  },
]);
