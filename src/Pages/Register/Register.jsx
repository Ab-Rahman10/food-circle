import React from "react";
import useAuth from "../../Hooks/Context";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { setUser, createUser, googleSignIn, userProfileUpdate } = useAuth();
  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const pass = form.pass.value;

    try {
      const result = await createUser(email, pass);
      // update profile
      await userProfileUpdate(name, photo);
      setUser({ ...result.user, photoURL: photo, displayName: name });
      console.log(result.user);
      navigate("/");
    } catch (err) {
      console.log("ERROR", error);
    }
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-orange-500">
          Register
        </h2>
        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              name="photo"
              type="url"
              id="photo"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter photo URL"
            />
          </div>

          {/* Email */}
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
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
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
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>
        {/* Google Sign-In */}
        <div className="text-center">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="w-full py-2 flex justify-center items-center border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google Logo"
              className="h-5 w-5 mr-2"
            />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
