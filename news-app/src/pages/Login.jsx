import React from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import loginImage from "../assets/login.png";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (
        user &&
        user.email === values.email &&
        user.password === values.password
      ) {
        navigate("/");
      } else {
        alert("Email or password is incorrect!");
      }
    },
  });

  return (
    <div className="min-h-screen flex">
      {/* Image */}
      <div className="w-1/2 hidden md:block">
        <img
          src={loginImage}
          alt="Login"
          className="h-full w-full object-cover"
        />
      </div>

      {/* form */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white p-6 rounded w-full max-w-md"
        >
          <h2 className="text-xl font-bold mb-4">Login</h2>

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="border px-3 py-2 w-full mb-3"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="border px-3 py-2 w-full mb-4"
          />

          {/* Login Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded"
          >
            Login
          </button>

          {/* Sign In Button */}
          <Link to="/signin">
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-800 text-white mt-3 w-full py-2 rounded"
            >
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
