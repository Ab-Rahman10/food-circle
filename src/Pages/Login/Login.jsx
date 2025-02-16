import useAuth from "../../Hooks/Context";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import loginLottieData from "../../assets/lottie/login.json";
import Lottie from "lottie-react";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { setUser, loginUser, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const { isDarkMode } = useContext(ThemeContext);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;

    try {
      await loginUser(email, pass);
      navigate("/");
      toast.success("You have logged in successfully. Enjoy your session!");
    } catch (err) {
      toast.error("Invalid email or password. Please try again.");
    }
  };

  // Google sign in
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn().then((res) => setUser(res.user));
      toast.success("Logged in with Google successfully. Welcome!");
      navigate("/");
    } catch (err) {
      toast.error("Google login failed. Please try again.");
    }
  };

  return (
    <div className={`${isDarkMode && "bg-gray-950"}`}>
      <div
        className={`flex min-h-screen items-center justify-center w-11/12 md:w-11/12 lg:w-9/12 mx-auto ${
          isDarkMode ? "bg-gray-950" : "bg-white"
        }`}
      >
        <div
          className={`w-full max-w-md rounded-lg p-6 shadow-md ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"
          }`}
        >
          <h2
            className={`mb-6 text-center text-2xl font-bold ${
              isDarkMode ? "text-orange-400" : "text-orange-500"
            }`}
          >
            Sign In
          </h2>
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className={`mt-1 w-full rounded-lg border p-2.5 focus:ring-2 focus:ring-orange-500 ${
                  isDarkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300"
                }`}
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className={`block text-sm font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Password
              </label>
              <input
                name="pass"
                type="password"
                id="password"
                className={`mt-1 w-full rounded-lg border p-2.5 focus:ring-2 focus:ring-orange-500 ${
                  isDarkMode
                    ? "border-gray-600 bg-gray-700 text-white"
                    : "border-gray-300"
                }`}
                placeholder="Enter your password"
                required
              />
            </div>
            {/* Login Button */}
            <div>
              <button
                type="submit"
                className={`w-full rounded-lg px-4 py-2 text-white transition ${
                  isDarkMode
                    ? "bg-orange-600 hover:bg-orange-700"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                Login
              </button>
            </div>
          </form>
          {/* Divider */}
          <div className="my-4 flex items-center justify-center">
            <hr
              className={`w-1/3 ${
                isDarkMode ? "border-gray-600" : "border-gray-300"
              }`}
            />
            <span
              className={`mx-2 text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              OR
            </span>
            <hr
              className={`w-1/3 ${
                isDarkMode ? "border-gray-600" : "border-gray-300"
              }`}
            />
          </div>
          {/* Sign in with Google */}
          <div>
            <button
              onClick={handleGoogleSignIn}
              className={`flex w-full items-center justify-center rounded-lg border px-4 py-2 transition ${
                isDarkMode
                  ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="mr-2 h-5 w-5"
              />
              Sign in with Google
            </button>
          </div>
          <div
            className={`text-sm text-center mt-5 ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Don't have an account?{" "}
            <Link
              className={`underline ${
                isDarkMode ? "text-orange-400" : "text-orange-500"
              }`}
              to="/register"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div className="hidden md:block w-[600px]">
          <Lottie animationData={loginLottieData}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Login;
