import React from "react";
import { useFormik } from "formik";

const Signin = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="min-h-screen flex items-center bg-gray-100 justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="shadow p-6 rounded w-full max-w-md bg-white"
      >
        <h2 className="mb-4 text-xl font-bold">Create Account</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          className="w-full border px-3 py-2 rounded mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="border w-full py-2 px-3 rounded mb-3"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          className="px-3 py-2 mb-4 w-full border rounded"
        />
        <button
          type="submit"
          className="text-white bg-green-500 rounded py-2 w-full hover:bg-green-600"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
