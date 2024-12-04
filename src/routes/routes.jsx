import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import MainLayout from "../layouts/MainLayout";
import AllMovie from "../pages/AllMovie";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allmovie",
        element: <AllMovie />,
      },
    ],
  },
]);

export default routes;
