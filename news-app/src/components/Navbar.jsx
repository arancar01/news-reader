import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // toggle for mobile menu
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user")); ///// simple login check
  const navigate = useNavigate();

  useEffect(() => {
    /// if user logs in/out in another tab, update state here too
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("user"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // log the user out
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
    <header className="bg-gray-200 px-1 py-2 shadow-md shadow-cyan-500/50 mt-5">
      <nav className="flex justify-center items-center w-full">
        <div className="flex items-center gap-6 flex-wrap justify-center">
          {/* logo on the left */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="AlxNews Logo" className="h-10 w-auto" />
          </a>

          {/* main nav links - visible on larger screens only */}
          <ul className="hidden sm:flex gap-3">
            {navItems.map(({ path, link }) => (
              <li key={path}>
                <NavLink to={path}>
                  <button className="px-3 py-2 bg-sky-500 text-white rounded-md hover:bg-blue-600 transition">
                    {link}
                  </button>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* /search bar - only shows on medium+ screens */}
          <form className="hidden md:flex border border-gray-400 bg-gray-100 overflow-hidden text-black rounded-lg">
            <input
              type="text"
              placeholder="search here"
              className="px-4 py-2 w-64 outline-none"
            />
          </form>

          {/* auth buttons - login or logout based on user state */}
          <div className="hidden md:flex gap-2">
            {!isLoggedIn ? (
              <>
                <NavLink to="/login">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-sky-900 shadow-md">
                    login
                  </button>
                </NavLink>
                <NavLink to="/signin">
                  <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 shadow-md hidden xl:flex">
                    sign in
                  </button>
                </NavLink>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow-md"
              >
                logout
              </button>
            )}
          </div>

          {/* mobile menu toggle button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" /> // //close icon
              ) : (
                <FaBars className="w-6 h-6" /> /// menu icon
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* mobile menu - shows only if toggled open */}
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

          {/* auth buttons inside mobile menu **/}
          {!isLoggedIn ? (
            <>
              <NavLink
                to="/login"
                className="py-2 text-lg hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                login
              </NavLink>
              <NavLink
                to="/signin"
                className="py-2 text-lg hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                sign in
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
              logout
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
