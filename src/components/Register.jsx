import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { handleLoginGoogle, handleRegister, setUser, handleName } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleLogin = async () => {
    try {
      const result = await handleLoginGoogle();
      setUser(result.user);
      toast.success("SignUp successful with Google!", {
        position: "top-center",
        autoClose: 2500,
      });
      navigate(redirectTo);
    } catch {
      toast.error("Something went wrong! Try again", {
        position: "top-center",
        autoClose: 2500,
      });
    }
  };

  const validatePassword = (password) => {
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/\d/.test(password)) {
      return "Password must contain at least one numeric character.";
    }
    if (!/\W/.test(password)) {
      return "Password must contain at least one special character.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    return "";
  };

  const onSubmit = async (data) => {
    const { email, password, name, profile } = data;
    console.log("this is data", data);
    const passwordError = validatePassword(password);

    if (passwordError) {
      setError(passwordError);
      return;
    }

    try {
      const result = await handleRegister(email, password);
      await handleName(name, profile);
      setUser(result.user);
      toast.success("Signup successful!", {
        position: "top-center",
        autoClose: 2000,
      });
      navigate(redirectTo);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-purple-100 py-10 ">
      <div className="px-5 md:px-0 md:w-6/12 mx-auto">
        <div className="w-full flex-col">
          <div className="card bg-base-100 w-full shrink-0 shadow-md">
            <h1 className="text-center text-4xl font-bold font-Roboto mt-9">
              Register Now
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input bg-[#F3F3F3] rounded-lg focus:outline-none"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Photo URL"
                  className={`input bg-[#F3F3F3] rounded-lg focus:outline-none ${
                    errors.profile ? "border-error" : ""
                  }`}
                  {...register("profile", {
                    required: "Image URL is required.",
                    pattern: {
                      value: /^https:\/\/.+/,
                      message: "Please enter a valid URL starting with https.",
                    },
                  })}
                />
                {errors.profile && (
                  <p className="text-error text-sm mt-1">
                    {errors.profile.message}
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input bg-[#F3F3F3] rounded-lg focus:outline-none"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="text-lg font-medium">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input bg-[#F3F3F3] rounded-lg focus:outline-none"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-14 text-xl"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                {error && (
                  <p className="text-red-500 text-sm text-center mt-3">
                    {error}
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-outline rounded-xl">
                  Sign Up
                </button>
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
                Sign Up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
