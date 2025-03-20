import React from "react";
//import alxnewsLogo from "../assets/alxnews.png";
import { NavLink } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { RxDiscordLogo } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";

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

    <header className="bg-black flex items-center justify-center h-16">
      {/*logo Alx news*/}
      <nav className="flex gap-3 flex items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold text-white ">
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

        <ul className="flex items-center justify-center gap-6 ">
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
        {/*(Search) */}
        <form className="hidden sm:flex items-center justify-center w-1/3 h-10 p-4 bg-gray-100 border border-gray-400 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="search here"
            className="flex px-4 py-2 w-64 outline-none"
          />
        </form>
        {/*(button login) */}
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 ">
          log in
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
