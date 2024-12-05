import { useContext, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  console.log(user);
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
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

        <div className="navbar-end flex gap-5">
          {user ? (
            <div
              // data-tooltip-id="my-tooltip"
              // data-tooltip-content={user?.displayName}
              title={user?.displayName}
              className="text-xl flex items-center md:text-3xl cursor-pointer w-10 h-10 rounded-full !z-50"
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User Profile"}
                  className="w-full h-full rounded-full"
                />
              ) : (
                <img
                  src="https://i.ibb.co/9YpfxcB/Avatar.png"
                  alt="Default Avatar"
                  className="w-full h-full rounded-full"
                />
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-bold" : "text-white font-semibold"
              }
            >
              <button>Login</button>
            </NavLink>
          )}

          {user && user.email ? (
            <button onClick={logOut} className="font-medium">
              Logout
            </button>
          ) : (
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-bold" : "text-white font-semibold"
              }
            >
              <button>Register</button>
            </NavLink>
          )}

          <button className="text-3xl">
            <MdOutlineDarkMode />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
