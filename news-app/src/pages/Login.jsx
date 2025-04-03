import React from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import loginImage from "../assets/login2.png";

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
    <div className="flex my-20">
      <div className="hidden md:flex w-2/3 items-center justify-center bg-white mb-20">
        <img
          src={loginImage}
          alt="Login"
          className="w-auto h-auto max-w-full max-h-[100vh] object-contain"
        />
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center px-0 mb-20">
        <form 
          onSubmit={formik.handleSubmit}
          className="bg-white p-3 py-8 rounded w-full max-w-md space-y-6"
        >
          <h2 className="text-xl font-bold mb-4">Login</h2>
          <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="border px-3 py-2 w-full mb-3"
          />
<label className="block text-gray-700 mb-1">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="border px-3 py-2 w-full mb-4"
          />
</div>
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white w-full py-2 rounded"
          >
            Login
          </button>

          <Link to="/signin">
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-600 text-white mt-3 w-full py-2 rounded"
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
