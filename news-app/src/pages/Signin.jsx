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
    <div className="flex my-20">
      
      <div className="hidden md:flex w-2/3 items-center justify-center bg-white mb-20">
        <img
          src={signinImage}
          alt="Sign up visual"
          className="w-auto h-auto max-w-full max-h-[100vh] object-contain"
        />
      </div>

      
      <div className="flex w-full md:w-1/2 items-center justify-center px-0 mb-20">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white p-3 py-8 rounded w-full max-w-md space-y-6"
        >
          <h2 className="text-xl font-bold mb-4 text-center">Create a new account</h2>

          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Your name"
              className="border px-3 py-2 w-full mb-3"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border px-3 py-2 w-full mb-3"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border px-3 py-2 w-full mb-4"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>

          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white w-full py-2 rounded"
          >
            Sign Up
          </button>

          <Link to="/login">
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-600 text-white mt-3 w-full py-2 rounded"
            >
              Log In
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signin;
