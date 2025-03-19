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
    <header className="bg-black">
      {/*hearder nav logo Alx news*/}
      <nav className="px-4 py-4"></nav>
    </header>
  );
};

export default Navbar;
