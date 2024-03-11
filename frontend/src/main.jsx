import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import SignForm from "./components/SignForm.jsx";
import EroorForm from "./components/EroorForm.jsx";
import LoginForm from "./components/LoginForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <EroorForm />,
  },
  {
    path: "/SignForm",
    element: <SignForm />,
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
