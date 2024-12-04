import { createBrowserRouter } from "react-router-dom";
import AddMovie from "../components/AddMovie";
import CommingSoon from "../components/CommingSoon";
import Login from "../components/Login";
import MyFavorite from "../components/MyFavorite";
import Register from "../components/Register";
import ResetPassword from "../components/ResetPassword";
import MainLayout from "../layouts/MainLayout";
import AllMovie from "../pages/AllMovie";
import Home from "../pages/Home";
import AuthProvider from "../provider/AuthProvider";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <MainLayout />{" "}
      </AuthProvider>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/reset/password",
        element: <ResetPassword />,
      },
      {
        path: "/movie/all",
        element: <AllMovie />,
      },
      {
        path: "/movie/add",
        element: <AddMovie />,
      },
      {
        path: "/movie/favorites",
        element: <MyFavorite />,
      },
      {
        path: "/movie/comming-soon",
        element: <CommingSoon />,
      },
    ],
  },
]);

export default routes;
