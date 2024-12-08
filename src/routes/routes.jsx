import { createBrowserRouter } from "react-router-dom";
import AddMovie from "../components/AddMovie";
import CommingSoon from "../components/CommingSoon";
import Login from "../components/Login";
import MovieDetails from "../components/MovieDetails";
import MyFavorite from "../components/MyFavorite";
import Register from "../components/Register";
import ResetPassword from "../components/ResetPassword";
import UpdateMovie from "../components/UpdateMovie";
import NotFound from "../error/NotFound";
import MainLayout from "../layouts/MainLayout";
import AllMovie from "../pages/AllMovie";
import Home from "../pages/Home";
import AuthProvider from "../provider/AuthProvider";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <MainLayout />
      </AuthProvider>
    ),
    errorElement: <NotFound />,
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
        loader: () => fetch("https://movie-server-puce.vercel.app/movie/all"),
      },

      {
        path: "/movie/add",
        element: (
          <PrivateRoute>
            <AddMovie />
          </PrivateRoute>
        ),
      },
      {
        path: "/movie/details/:id",
        element: (
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://movie-server-puce.vercel.app/movie/details/${params.id}`
          ),
      },
      {
        path: "/movie/update/:id",
        element: (
          <PrivateRoute>
            <UpdateMovie />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://movie-server-puce.vercel.app/movie/details/${params.id}`
          ),
      },
      {
        path: "/movie/favorites",
        element: (
          <PrivateRoute>
            <MyFavorite />
          </PrivateRoute>
        ),
      },
      {
        path: "/movie/comming-soon",
        element: <CommingSoon />,
      },
    ],
  },
]);

export default routes;
