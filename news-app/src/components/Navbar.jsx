import React from "react";
//import alxnewsLogo from "../assets/alxnews.png";
import { NavLink } from "react-router-dom";

import { CiFacebook } from "react-icons/ci";
import { RxDiscordLogo } from "react-icons/rx";
import { FaBars, FaWhatsapp } from "react-icons/fa";

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

    <header className="bg-black h-16 text-white justify-items-center  ">
      {/*logo Alx news*/}
      <nav className=" gap-3 flex  justify-between px-6 py-4">
        <a href="/" className="flex text-xl font-bold text-white ">
          Alx
          <span className="text-red-400">
            <span className=" text-blue-500">N</span>EWS
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

        <ul className=" justify-center gap-6 hidden sm:flex">
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
        <div className=" sm:flex hidden  ">
          <form className="flex bg-gray-100 border border-gray-400 rounded-lg overflow-hidden text-black">
            <input
              type="text "
              placeholder="search here"
              className="flex px-4 py-2 w-64 outline-none items-center"
            />
          </form>
        </div>
        {/*(button login) */}
        <div className="hidden md:flex items-center ml-auto">
          <NavLink to="/login">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md">
              Login
            </button>
          </NavLink>
        </div>
        {/*(logos socials) */}
        <div className="text-white md:flex gap-3 items-center hidden ">
          {/*p-10*/} {/* sm"640px " lg"1024px" 2xl"1536px" */}
          <a href="/" className="hover:text-blue-500">
            <CiFacebook size={20} />
          </a>
          <a href="/" className="hover:text-purple-700">
            <RxDiscordLogo size={20} />
          </a>
          <a href="/" className="hover:text-green-500">
            <FaWhatsapp size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
