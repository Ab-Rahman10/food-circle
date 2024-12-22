import React from "react";
import useAuth from "../../Hooks/Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser, loginUser, googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;
    const userInfo = { email, pass };

    loginUser(email, pass)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        navigate("/");
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  //   google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-orange-500">
          Sign In
        </h2>
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-orange-500 focus:ring-orange-500"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              name="pass"
              type="password"
              id="password"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-orange-500 focus:ring-orange-500"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full rounded-lg bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600"
            >
              Login
            </button>
          </div>
        </form>
        {/* Divider */}
        <div className="my-4 flex items-center justify-center">
          <hr className="w-1/3 border-gray-300" />
          <span className="mx-2 text-sm text-gray-500">OR</span>
          <hr className="w-1/3 border-gray-300" />
        </div>
        {/* Sign in with Google */}
        <div>
          <button
            onClick={handleGoogleSignIn}
            className="flex w-full items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-100"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="mr-2 h-5 w-5"
            />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
