import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

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
        navigate("/home");
      } else {
        alert("Email or password is incorrect!");
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
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

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
