import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import SearchContext from "../context/SearchContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));
  const { setSearchTerm } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState("");
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

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  const navItems = [
    { path: "/", link: "News" },
    { path: "technology", link: "Technology" },
    { path: "economy", link: "Economy" },
    { path: "sports", link: "Sports" },
    { path: "pc", link: "PC" },
  ];

  return (
    <header className="bg-gray-200 px-1 py-2 shadow-md shadow-cyan-500/50 mt-5 relative">
      <nav className="flex justify-center items-center w-full">
        <div className="flex items-center gap-6 flex-wrap justify-center">
          
          <a href="/" className="flex items-center">
            <img src={logo} alt="AlxNews Logo" className="h-10 w-auto" />
          </a>

          
          <ul className="hidden sm:flex gap-3">
            {navItems.map(({ path, link }) => (
              <li key={path}>
                <NavLink to={path}>
                  <button className="px-3 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition">
                    {link}
                  </button>
                </NavLink>
              </li>
            ))}
          </ul>

          
          <form
            onSubmit={handleSearch}
            className="hidden md:flex border border-gray-400 bg-gray-100 overflow-hidden text-black rounded-lg"
          >
            <input
              type="text"
              placeholder="search here"
              className="px-4 py-2 w-64 outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </form>

                    <div className="hidden md:flex gap-2">
            {!isLoggedIn ? (
              <>
                <NavLink to="/login">
                  <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 shadow-md">
                    login
                  </button>
                </NavLink>
                <NavLink to="/signin">
                  <button className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-500 shadow-md hidden xl:flex">
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

      
      {isMenuOpen && (
        <div className="md:hidden z-50 absolute top-16 left-0 w-full bg-gray-900 text-white py-2 shadow-lg flex flex-col items-center">
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
