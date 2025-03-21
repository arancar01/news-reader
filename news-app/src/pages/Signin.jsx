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
      navigate("/");
    },
  });

  return (
    <div className="flex min-h-screen">
      {/* Image on the left */}
      <div className="w-1/2 hidden md:block">
        <img
          src={signinImage}
          alt="Sign In"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Signin Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <form
          onSubmit={formik.handleSubmit}
          className="p-6 rounded max-w-md w-full"
        >
          <h2 className="text-xl font-bold mb-4">Create Account</h2>

          <input
            name="username"
            type="text"
            placeholder="Username"
            required
            value={formik.values.username}
            onChange={formik.handleChange}
            className="px-3 py-2 w-full border rounded mb-3"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            className="py-2 px-3 w-full rounded mb-3 border"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            className="w-full px-3 py-2 mb-4 border rounded"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
          >
            Sign In
          </button>

          <Link to="/login">
            <button
              type="button"
              className="bg-gray-500 text-white mt-3 w-full py-2 rounded hover:bg-gray-600"
            >
              Back to Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signin;
