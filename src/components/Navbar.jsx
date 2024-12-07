import { useContext, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ThemeContext } from "../provider/ThemeProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div
      className={`bg-${theme === "light" ? "gray-100" : "gray-800"} text-${
        theme === "light" ? "black" : "white"
      }`}
    >
      <div className="bg-gradient-to-r from-violet-900 to-fuchsia-900 text-white ">
        <div className="navbar md:w-11/12 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="mx-3 lg:hidden">
                <div
                  className="text-3xl font-bold lg:hidden"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <IoMdClose /> : <IoMdMenu />}
                </div>
              </div>

              <ul
                tabIndex={0}
                className={`menu menu-sm bg-purple-950 rounded-box z-[1] mt-4 w-52  p-5 gap-3 shadow ${
                  open ? "dropdown-content" : "hidden"
                }`}
              >
                <NavLink
                  to="/"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 font-bold"
                      : "text-white font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/movie/all"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 font-bold"
                      : "text-white font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
                  }
                >
                  All Movies
                </NavLink>
                <NavLink
                  to="/movie/add"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 font-bold"
                      : "text-white font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
                  }
                >
                  Add Movie
                </NavLink>
                <NavLink
                  to={"/movie/favorites"}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 font-bold"
                      : "text-white font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
                  }
                >
                  My Favorites
                </NavLink>

                <NavLink
                  to="/movie/comming-soon"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 font-bold"
                      : "text-white font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
                  }
                >
                  Coming Soon
                </NavLink>
              </ul>
            </div>
            <p className="font-Roboto font-medium text-xl">M-Flix</p>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-10 px-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 font-bold"
                    : "text-white font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/movie/all"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 font-bold"
                    : "text-white font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
                }
              >
                All Movies
              </NavLink>
              <NavLink
                to={"/movie/add"}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 font-bold"
                    : "text-white font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
                }
              >
                Add Movie
              </NavLink>
              <NavLink
                to="/movie/favorites"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 font-bold"
                    : "text-white font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
                }
              >
                My Favorites
              </NavLink>

              <NavLink
                to="/movie/comming-soon"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 font-bold"
                    : "text-white font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
                }
              >
                Coming Soon
              </NavLink>
            </ul>
          </div>

          <div className="navbar-end gap-3">
            {user ? (
              <div className="dropdown dropdown-end group z-50">
                <div className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={
                        user.photoURL || "https://i.ibb.co/9YpfxcB/Avatar.png"
                      }
                      alt={user.displayName || "User Profile"}
                    />
                  </div>
                </div>
                <ul className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box mt-3 w-52 p-4 shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <p className="text-center text-xl font-medium font-Roboto mb-3">
                    {user?.displayName}
                  </p>
                  <button
                    onClick={logOut}
                    className="text-error hover:btn hover:text-xl text-xl font-medium font-Roboto"
                  >
                    Logout
                  </button>
                </ul>
              </div>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 font-bold"
                      : "text-white font-semibold"
                  }
                >
                  <button>Login</button>
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 font-bold"
                      : "text-white font-semibold"
                  }
                >
                  <button>Register</button>
                </NavLink>
              </>
            )}
            <button onClick={toggleTheme} className="text-3xl btn-md">
              {theme === "light" ? <MdLightMode /> : <MdOutlineDarkMode />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
