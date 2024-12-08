import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
const Login = () => {
  const { handleLogin, handleLoginGoogle, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberEmail, setRememberEmail] = useState();
  const navigate = useNavigate();
  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLogin(email, password)
      .then(() => {
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(redirectTo);
      })
      .catch(() => {
        toast("Something went Wrong! Try agin.", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  const location = useLocation();
  const redirectTo = location.state?.from || "/";
  const handleGoogleLogin = async () => {
    try {
      const result = await handleLoginGoogle();
      setUser(result.user);
      toast.success("Login successful with Google!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate(redirectTo);
    } catch {
      toast.error("Something went wrong! Try again", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <div className="bg-purple-100 py-10 ">
        <div className="px-5 md:w-6/12 mx-auto ">
          <div className="md:w-full flex-col">
            <div className="card bg-base-100 md:w-full shrink-0 shadow-md">
              <form onSubmit={handleLoginForm} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="text-lg font-medium">Email</span>
                  </label>
                  <input
                    type="email"
                    value={rememberEmail}
                    onChange={(e) => setRememberEmail(e.target.value)}
                    name="email"
                    placeholder="email"
                    className="input bg-[#F3F3F3] rounded-lg focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="text-lg font-medium">Password</span>
                  </label>
                  <input
                    type={showPassword ? " text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input bg-[#F3F3F3] rounded-lg focus:outline-none"
                    required
                  />
                  <button
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="absolute right-3 top-14 text-xl"
                    type="button"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
                  <p>
                    <Link
                      to={"/reset/password"}
                      state={rememberEmail}
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </Link>
                  </p>

                  <p className="md:text-end text-xs text-[#706F6F]">
                    Dont’t Have An Account ?
                    <Link
                      to={"/register"}
                      className="text-error ml-1 font-medium"
                    >
                      Register Now
                    </Link>
                  </p>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-outline rounded-xl">Login</button>
                </div>
              </form>
              <div className="form-control px-8 mb-8">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-outline rounded-xl"
                >
                  <span className="text-2xl">
                    <FcGoogle />
                  </span>{" "}
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
