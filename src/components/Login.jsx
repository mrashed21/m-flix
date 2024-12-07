import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { handleLogin, handleLoginGoogle, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      await handleLogin(email, password);
      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 2000,
      });
      navigate(redirectTo);
    } catch {
      toast.error("Something went wrong! Try again.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await handleLoginGoogle();
      setUser(result.user);
      toast.success("Login successful with Google!", {
        position: "top-center",
        autoClose: 2500,
      });
      navigate(redirectTo);
    } catch {
      toast.error("Something went wrong! Try again.", {
        position: "top-center",
        autoClose: 2500,
      });
    }
  };

  return (
    <div className="bg-purple-100 py-10">
      <div className="px-5 md:w-6/12 mx-auto">
        <div className="md:w-full flex-col">
          <div className="card bg-base-100 md:w-full shrink-0 shadow-md">
            <h1 className="text-center text-4xl font-bold font-Roboto mt-9">
              Login
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className={`input bg-[#F3F3F3] rounded-lg focus:outline-none ${
                    errors.email ? "input-error" : ""
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="text-lg font-medium">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className={`input bg-[#F3F3F3] rounded-lg focus:outline-none ${
                    errors.password ? "input-error" : ""
                  }`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[58px] text-lg"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                {errors.password && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
                <p>
                  <Link
                    to={"/reset/password"}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </p>
                <p className="md:text-end text-xs text-[#706F6F]">
                  Don’t Have An Account?
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
  );
};

export default Login;
