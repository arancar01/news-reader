import React from "react";
//import alxnewsLogo from "../assets/alxnews.png";

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
      <nav className="px-4 py-4">
        <a href="/" className="text-xl font-baold text-white">
          Alx
          <span className="text-red-400">
            <span className="text-blue-500">N</span>EWS
          </span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
