import React from "react";
//import alxnewsLogo from "../assets/alxnews.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "about",
      link: "About",
    },
    {
      path: "register",
      link: "Register",
    },
  ];
  return (
    /*<header>
      <nav className="flex items-center justify-between p-4 bg-black">
        <a href="/">
          <img src={alxnewsLogo} alt="ALX News Logo" className="h-12 w-auto" />
        </a>
      </nav>
    </header>*/

    <header className="bg-black">
      {/*logo Alx news*/}
      <nav className="flex items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold text-white">
          Alx
          <span className="text-red-400">
            <span className="text-blue-500">N</span>EWS
          </span>
        </a>
        {/*navItems */}
        {/*
          <ul className="flex items-center justify-center gap-6 text-lg font-medium text-white">
            <li>
              <a href="/" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="/register" className="hover:text-blue-500 transition">
                Register
              </a>
            </li>
          </ul>
        */}

        <ul className="flex items-center justify-center gap-6">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink
                to={path}
                className="text-white hover:text-blue-500 transition"
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
