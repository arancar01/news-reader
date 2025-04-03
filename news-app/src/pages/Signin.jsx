import React from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import signinImage from "../assets/signin.png";

const Signin = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      localStorage.setItem("user", JSON.stringify(values));
      navigate("/login");
    },
  });

  return (
<<<<<<< HEAD
    <div className="flex min-h-screen">
      {/* Left Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-white">
=======
    <div className="flex my-20">
      
      <div className="hidden md:flex w-2/3 items-center justify-center bg-white mb-20">
>>>>>>> 019863e (update: fix search bar, image style, colors and layout tweaks)
        <img
          src={signinImage}
          alt="Sign up visual"
          className="w-auto h-auto max-w-full max-h-[100vh] object-contain"
        />
      </div>

      
      <div className="flex w-full md:w-1/2 items-center justify-center px-0 mb-20 " >
        <div className="w-full max-w-sm bg-white rounded-lg mb-20 ">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create a new account
          </h2>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Username</label>
              <input
                type="text"
                name="username"
                className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring focus:ring-sky-300"
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring focus:ring-sky-300"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Email"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring focus:ring-sky-300"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-sky-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
