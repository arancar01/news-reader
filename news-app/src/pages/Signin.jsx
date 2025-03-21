import React from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";

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
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className=" max-w-md w-full p-6 shadow rounded"
      >
        <h2 className="mb-4 font-bold text-xl">Create Account</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={formik.values.username}
          onChange={formik.handleChange}
          className="px-3 py-2 w-full border rounded mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          className="border py-2 px-3 rounded w-full mb-3"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          className="w-full mb-4 py-2 rounded px-3 border"
        />
        <button
          type="submit"
          className="bg-green-500 py-2 rounded w-full hover:bg-green-600 text-white"
        >
          Sign In
        </button>
        <Link to="/login">
          <button
            type="button"
            className="mt-3 w-full py-2 bg-gray-500 hover:bg-gray-600 rounded text-white"
          >
            Back to Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Signin;
