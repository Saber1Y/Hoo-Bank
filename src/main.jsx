import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Register from "./components/Register.jsx";
import EroorForm from "./components/EroorForm.jsx";
import LoginForm from "./components/LoginForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <EroorForm />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/LoginForm",
    element: <LoginForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
