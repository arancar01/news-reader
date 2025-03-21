import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { RxDiscordLogo } from "react-icons/rx";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", link: "Home" },
    { path: "about", link: "About" },
    { path: "register", link: "Register" },
  ];

  return (
    <header className="bg-black text-white relative">
      <nav className="flex items-center justify-between px-6 py-4 w-full gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-xl font-bold text-white flex">
            Alx
            <span className="text-red-400">
              <span className="text-blue-500">N</span>EWS
            </span>
          </a>
        </div>

        {/* (Navbar Buttons) */}
        {/*<div className="flex gap-4">
          <NavLink to="/">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Home
            </button>
          </NavLink>

          <NavLink to="/about">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
              About
            </button>
          </NavLink>

          <NavLink to="/register">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
              Register
            </button>
          </NavLink>
        </div>
*/}

        {/* Navigation Links - Desktop */}
        <ul className="hidden sm:flex gap-4">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink to={path}>
                <button className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition">
                  {link}
                </button>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Search Input - md+ only */}
        <div className="hidden md:flex">
          <form className="flex bg-gray-100 border border-gray-400 rounded-lg overflow-hidden text-black">
            <input
              type="text"
              placeholder="search here"
              className="px-4 py-2 w-64 outline-none"
            />
          </form>
        </div>

        {/* Login Button - md+ only */}
        <div className="hidden md:flex">
          <NavLink to="/login">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition shadow-md">
              Login
            </button>
          </NavLink>
        </div>

        {/* Social Icons - md+ only */}
        <div className="hidden md:flex items-center gap-2">
          <a href="/" className="hover:text-blue-400">
            <CiFacebook size={20} />
          </a>
          <a href="/" className="hover:text-purple-400">
            <RxDiscordLogo size={20} />
          </a>
          <a href="/" className="hover:text-green-400">
            <FaWhatsapp size={20} />
          </a>
        </div>

        {/* Mobile Menu Button - sm only */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - appears only on small screens */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-900 text-white absolute top-16 left-0 w-full py-4 shadow-lg z-50">
          {navItems.map(({ path, link }) => (
            <NavLink
              key={path}
              to={path}
              className="py-2 text-lg hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
