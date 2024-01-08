import { cn } from "../utils/cn";
import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/images/Fentend 1.png";
import { useEffect, useState } from "react";
import Backdrop from "./Backdrop";

export default function Navbar() {
  const [navBgColor, setNavBgColor] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleNavbarBg = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) setNavBgColor(true);
    else if (scrolled <= 200) setNavBgColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleNavbarBg);
  }, []);

  return (
    <nav
      className={cn(
        "nav fixed top-0 w-full h-24 px-4 z-50",
        //Toggle Background color
        navBgColor ? "bg-[#042EEF]" : "transparent"
      )}
    >
      <div
        className={cn(
          //Base style
          "w-full h-full max-w-6xl mx-auto flex items-center justify-between"
        )}
      >
        {/* =============== Logo =============== */}
        <Link to="/">
          <svg
            width="48"
            height="48"
            viewBox="0 0 234 290"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M91.5 0H232.5V90C237.7 142.8 222 173.667 213.5 182.5C201.913 206.283 173.32 222.086 151.375 230.397C139.721 234.809 127.206 236 114.745 236H80V182.5H133.5C159.522 182.5 176.427 162.707 185.051 146.115C189.401 137.745 190.5 128.206 190.5 118.774V43H115.5C80 43 50.8333 70.1667 48.5 90H115.5V143.5H48.5C40.5 151.5 40.5 167 40.5 182.5V236L0 289.5V90C7.2 22.8 64 2 91.5 0Z"
              fill="#FFFFFF"
            />
          </svg>
          {/* <img src={logo} alt="logo" className="w-12 h-w-12 object-cover" /> */}
        </Link>
        <div className="flex items-center md:hidden">
          <button className="px-4 py-3 mr-4 rounded-3xl bg-white text-[var(--blue)]">
            <Link to="/signin">Get Started</Link>
          </button>
          {/* =============== Hamburger Icon =============== */}
          <div
            onClick={() => setShowMenu(true)}
            className="flex flex-col items-center justify-center gap-1 w-[50px] h-[50px] rounded-full cursor-pointer bg-white md:hidden"
          >
            <span className="w-7 h-1 rounded-lg bg-[var(--blue)]"></span>
            <span className="w-7 h-1 rounded-lg bg-[var(--blue)]"></span>
            <span className="w-7 h-1 rounded-lg bg-[var(--blue)]"></span>
          </div>
        </div>
        {/* =============== Nav links =============== */}
        <ul
          className={cn(
            // Mobile Screens
            "absolute bg-white left-0 z-[60] w-full text-[var(--blue)] p-8 flex flex-col items-center gap-6 font-medium transition-[top] duration-300 ease-in-out",
            //Toggle Menu
            !showMenu ? "-top-[999%]" : "top-0",
            // Large Screens
            "md:static md:bg-inherit md:w-auto md:flex-row md:gap-10 md:text-white md:text-lg md:p-0"
          )}
        >
          <NavLink
            to="/"
            onClick={() => {
              showMenu && setShowMenu(false);
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/rates"
            onClick={() => {
              showMenu && setShowMenu(false);
            }}
          >
            Rates
          </NavLink>
          <NavLink
            to="/faq"
            onClick={() => {
              showMenu && setShowMenu(false);
            }}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => {
              showMenu && setShowMenu(false);
            }}
          >
            About
          </NavLink>
          <button
            className="px-4 py-3 rounded-lg bg-[var(--blue)] text-white md:bg-white md:text-[var(--blue)]"
            onClick={() => {
              showMenu && setShowMenu(false);
            }}
          >
            <Link to="/signin">Get Started</Link>
          </button>
        </ul>
        {showMenu && <Backdrop setShowMenu={setShowMenu} />}
      </div>
    </nav>
  );
}
