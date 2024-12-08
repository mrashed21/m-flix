import { useContext, useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="bg-transparent shadow-lg backdrop-blur-lg border-b-2 border-gray-300 z-50">
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
              className={`menu menu-sm bg-base-100 backdrop-blur-lg border-b-2 border-gray-300 rounded-box mt-4 w-52  p-5 gap-3 shadow z-50 ${
                open ? "dropdown-content" : "hidden"
              }`}
            >
              <NavLink
                to="/"
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 font-bold"
                    : " font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
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
                    : " font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
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
                    : " font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
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
                    : " font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
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
                    : " font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
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
                  : " font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/movie/all"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-bold"
                  : " font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
              }
            >
              All Movies
            </NavLink>
            <NavLink
              to={"/movie/add"}
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-bold"
                  : " font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
              }
            >
              Add Movie
            </NavLink>
            <NavLink
              to="/movie/favorites"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-bold"
                  : " font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
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
                  : " font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-red-500 transition-all ease-in-out duration-300"
              }
            >
              Coming Soon
            </NavLink>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          {user && (
            <div className="dropdown dropdown-end group z-50">
              <div className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user && user?.photoURL ? (
                    <img
                      src={user?.photoURL}
                      alt="user.displayName"
                      className="w-full h-full rounded-full"
                    />
                  ) : (
                    <img
                      src={"https://i.ibb.co/9YpfxcB/Avatar.png"}
                      alt={user.displayName}
                    />
                  )}
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
          )}
          {!user && (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-bold" : "font-semibold"
                }
              >
                <button>Login</button>
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-bold" : " font-semibold"
                }
              >
                <button>Register</button>
              </NavLink>
            </>
          )}

          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={handleTheme}
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current p-2 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;