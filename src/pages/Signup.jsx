import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { CiUnlock } from "react-icons/ci";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useRef, useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
// import { CiGlobe } from "react-icons/ci";
// import { FaGooglePlay } from "react-icons/fa";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const passwordField = useRef(null);

  function togglePassword() {
    if (showPassword) {
      passwordField.current.type = "password";
      setShowPassword(!showPassword);
    } else {
      passwordField.current.type = "text";
      setShowPassword(!showPassword);
    }
  }

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <div className="bg-bgImg bg-center bg-cover h-[330px]">
        <Link to="/" className="mx-auto flex w-fit md:block md:w-[unset]">
          <svg
            width="48"
            height="48"
            viewBox="0 0 234 290"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="p-2"
          >
            <path
              d="M91.5 0H232.5V90C237.7 142.8 222 173.667 213.5 182.5C201.913 206.283 173.32 222.086 151.375 230.397C139.721 234.809 127.206 236 114.745 236H80V182.5H133.5C159.522 182.5 176.427 162.707 185.051 146.115C189.401 137.745 190.5 128.206 190.5 118.774V43H115.5C80 43 50.8333 70.1667 48.5 90H115.5V143.5H48.5C40.5 151.5 40.5 167 40.5 182.5V236L0 289.5V90C7.2 22.8 64 2 91.5 0Z"
              fill="#FFFFFF"
            />
          </svg>
        </Link>
      </div>
      <div className="-mt-[120px] w-full max-w-[640px] mx-auto">
        <h4 className="text-[2.125rem] text-white font-bold mx-4">Sign Up</h4>
        <form className="bg-[#F5F7FA] my-5 rounded-t-xl p-4 text-base">
          <div className="bg-white flex gap-4 items-center p-4 my-4 rounded-lg hover:border hover:border-black">
            <FaRegUser />
            <input
              name="Username"
              type="text"
              placeholder="Username"
              required
              className="w-full h-full outline-none"
            />
          </div>
          <div className="bg-white flex gap-4 items-center p-4 my-4 rounded-lg hover:border hover:border-black">
            <MdOutlineEmail />
            <input
              name="Email"
              type="email"
              placeholder="Email"
              required
              className="w-full h-full outline-none"
            />
          </div>
          <div className="bg-white flex gap-4 items-center p-4 my-4 rounded-lg hover:border hover:border-black">
            <CiUnlock />
            <input
              ref={passwordField}
              name="Password"
              type="password"
              placeholder="Password"
              required
              className="w-full h-full outline-none"
            />
            {showPassword ? (
              <FaEye className="cursor-pointer" onClick={togglePassword} />
            ) : (
              <FaEyeSlash className="cursor-pointer" onClick={togglePassword} />
            )}
          </div>
          <div className="bg-white flex gap-4 items-center p-4 my-4 rounded-lg hover:border hover:border-black">
            <LuUsers2 />
            <input
              type="text"
              placeholder="Referral Code (Optional)"
              className="w-full h-full outline-none"
            />
          </div>
          <div className="flex gap-4 items-center p-4 my-3">
            <input type="checkbox" />
            <p className="text-xs">
              Agree to Fentrade Terms and conditions & Privacy Policy
            </p>
          </div>
          <button className="w-full py-3 text-center text-white font-semibold bg-gradient-to-r from-[#00167C] to-[#2048FF] rounded-lg">
            Next
          </button>
        </form>
        <p className="text-center mb-3">
          Have an account?{" "}
          <Link to="/signin">
            <b>Sign In</b>
          </Link>
        </p>
      </div>
    </div>
  );
}
