
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Login from "./Login";
import { Link, useLocation } from "react-router-dom";


function Navbar() {
  const [openNavbar, setopenNavbar] = useState(false);
  const [openLogin, setopenLogin] = useState(false);

  const route = useLocation();

console.log(route.pathname)

  return (
    <div className="flex items-center py-3 px-5 justify-between">
      <div className="flex items-center">
        <div>
          <button
            className="p-1 sm:hidden rounded border border-[#333333] text-[#333333] mr-2"
            onClick={() => {
              setopenNavbar(!openNavbar);
            }}
          >
            <FaBars />
          </button>
          {openNavbar && (
            <div className=" text-xl bg-white p-5 rounded-xl z-50 shadow-xl fixed justify-between">
              <Link to={'/'}>
                <p
                  className={`${
                    route.pathname === '/' ? "text-[#2A8e9e]" : "text-[#333333]"
                  }`}
                >
                  Home
                </p>
              </Link>
              <p className="">Courses</p>
              <p>Bootcamp</p>
              <p>Career Path</p>
              <p>Help Center</p>
            </div>
          )}
        </div>
        <p className="text-xl font-bold text-[#2A8e9e] italic">Sikho</p>
      </div>
      <div className="sm:flex hidden  items-center font-semibold text-[#333333] w-4/12  justify-between">
        <Link to={'/'}>
          <p
            className={`${
              route.pathname === "/" ? "text-[#2A8e9e]" : "text-[#333333]"
            }`}
          >
            Home
          </p>
        </Link>
        <Link to={'/courses'}>
          <p
            className={`${
              route.pathname === "/courses"? "text-[#2A8e9e]" : "text-[#333333]"
            }`}
          >
            Course
          </p>
        </Link>
        <p>Bootcamp</p>
        <p>Career Path</p>
        <p>Help Center</p>
      </div>

      <div>
        <button
          onClick={() => {
            setopenLogin(true);
          }}
          className="border border-[#333333] text-[#333333] px-4 py-1 rounded-full"
        >
          login
        </button>
        <button className="bg-[#333333] ml-5 text-white px-4 py-1 rounded-full">
          Sign Up
        </button>
      </div>

      {openLogin && <Login />}
    </div>
  );
}

export default Navbar;
