import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { RxDiscordLogo } from "react-icons/rx";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("user"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const navItems = [
    { path: "/", link: "News" },
    { path: "technology", link: "Technology" },
    { path: "economy", link: "Economy" },
    { path: "sports", link: "Sports" },
    { path: "pc", link: "PC" },
  ];

  return (
    <header className="relative bg-black text-white">
      <nav className="flex items-center justify-between w-full px-6 py-4 gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex text-xl font-bold text-white">
            Alx
            <span className="text-red-400">
              <span className="text-blue-500">N</span>EWS
            </span>
          </a>
        </div>

        {/* Links (path) */}
        <ul className="hidden sm:flex gap-4">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink to={path}>
                <button className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  {link}
                </button>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* search *_*/}
        <div className="hidden md:flex">
          <form className="flex border border-gray-400 bg-gray-100 overflow-hidden text-black rounded-lg">
            <input
              type="text"
              placeholder="Search here"
              className="px-4 py-2 w-64 outline-none"
            />
          </form>
        </div>

        {/* auth Buttons) */}
        <div className="hidden md:flex gap-2">
          {!isLoggedIn ? (
            <>
              <NavLink to="/login">
                <button className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600 shadow-md">
                  Login
                </button>
              </NavLink>
              <NavLink to="/signin">
                <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 shadow-md hidden xl:flex">
                  Sign In
                </button>
              </NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow-md"
            >
              Logout
            </button>
          )}
        </div>

        {/* tocial icons ) */}
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

        {/* mobile menu toggle */}
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

      {/* mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden z-50 absolute top-16 left-0 w-full bg-gray-900 text-white py-4 shadow-lg flex flex-col items-center">
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
          {!isLoggedIn ? (
            <>
              <NavLink
                to="/login"
                className="py-2 text-lg hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/signin"
                className="py-2 text-lg hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </NavLink>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="mt-2 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
