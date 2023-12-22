import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router.jsx";
import Authprovider from "./Authprovider/Authprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-xl mx-auto ">
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </div>
  </React.StrictMode>
);
