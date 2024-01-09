import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/images/Fentend 1.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1b0d3a] to-[#250e66] text-white py-14">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="w-full text-sm border-b pb-10 md:flex md:justify-between">
          <NavLink to="/">
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
            {/* <img
              src={logo}
              alt="logo"
              className="hidden w-16 h-w-16 object-cover md:block"
            /> */}
          </NavLink>
          <div className="md:flex md:gap-14">
            <div className="flex flex-col">
              <p className="text-[#ffffff80] my-2 md:my-3">Follow</p>
              <a href="#" target="blank" className="my-2 md:my-3">
                Facebook
              </a>
            </div>
            <div className="flex flex-col">
              <p className="text-[#ffffff80] my-2 md:my-3">Company</p>
              <Link to="/" className="my-2 md:my-3">
                About Us
              </Link>
              <Link to="/" className="my-2 md:my-3">
                Terms
              </Link>
              <Link to="/privacy" className="my-2 md:my-3">
                Privacy Policy
              </Link>
            </div>
            <div className="flex flex-col">
              <p className="text-[#ffffff80] my-2 md:my-3">Customer</p>
              <Link to="/" className="my-2 md:my-3">
                Gift Card Rates
              </Link>
              <Link to="/" className="my-2 md:my-3">
                FAQ
              </Link>
              <Link to="/" className="my-2 md:my-3">
                Blog
              </Link>
            </div>
          </div>
        </div>
        {/* Copyright crap goes here */}
        <p className="text-xs text-[#ffffff80] mt-10 md:w-[75%]">
          © 2023 Fentrade. All Rights Reserved. All third-party trademarks
          appearing on this site are the property of their respective owners.
          Fentrade has no relationship with any third party who have trademarks
          or gift cards appearing on this site.
        </p>
      </div>
    </footer>
  );
}
