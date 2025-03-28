import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";

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
    <header className="bg-gray-200 px-1 py-2 shadow-md shadow-cyan-500/50">
      <nav className="flex justify-center items-center w-full">
        <div className="flex items-center gap-6 flex-wrap justify-center ">
          {/* الشعار */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="AlxNews Logo" className="h-10 w-auto" />
          </a>

          {/* روابط التنقل */}
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

          {/* البحث */}
          <form className="hidden md:flex border border-gray-400 bg-gray-100 overflow-hidden text-black rounded-lg">
            <input
              type="text"
              placeholder="Search here"
              className="px-4 py-2 w-64 outline-none"
            />
          </form>

          {/* أزرار تسجيل الدخول */}
          <div className="hidden md:flex gap-2">
            {!isLoggedIn ? (
              <>
                <NavLink to="/login">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-sky-900 shadow-md">
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

          {/* زر الموبايل */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* القائمة الجانبية للموبايل */}
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
