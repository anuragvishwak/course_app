import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import Login from "./Login";
import { Link, useLocation } from "react-router-dom";
import SignUp from "./SignUp";
import { collection, getDocs } from "firebase/firestore";
import { database } from "./FirebaseConfig";
import { IoLogOut } from "react-icons/io5";

function Navbar() {
  const [openNavbar, setopenNavbar] = useState(false);
  const [openLogin, setopenLogin] = useState(false);
  const [openingSignUp, setopeningSignUp] = useState(false);
  const [userDetails, setuserDetails] = useState([]);

  const route = useLocation();
  const UserEmail = localStorage.getItem("email");

  async function gatheringUserDetails() {
    try {
      const courseDetails = await getDocs(collection(database, "user_details"));

      let multipleArray = courseDetails.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setuserDetails(multipleArray);
      console.log("Fetched Data:", multipleArray);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  }

  useEffect(() => {
    gatheringUserDetails();
  }, []);

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
              <Link to={"/"}>
                <p
                  className={`${
                    route.pathname === "/" ? "text-[#2A8e9e]" : "text-[#333333]"
                  }`}
                >
                  Home
                </p>
              </Link>
              <Link to={"/courses"}>
                <p
                  className={`${
                    route.pathname === "/courses"
                      ? "text-[#2A8e9e]"
                      : "text-[#333333]"
                  }`}
                >
                  Course
                </p>
              </Link>
              <p>Bootcamp</p>
              <p>Career Path</p>
              <p>Help Center</p>
            </div>
          )}
        </div>
        <p className="text-xl font-bold text-[#2A8e9e] italic">Sikho</p>
      </div>
      <div className="sm:flex hidden  items-center font-semibold text-[#333333] w-4/12  justify-between">
        <Link to={"/"}>
          <p
            className={`${
              route.pathname === "/" ? "text-[#2A8e9e]" : "text-[#333333]"
            }`}
          >
            Home
          </p>
        </Link>
        <Link to={"/courses"}>
          <p
            className={`${
              route.pathname === "/courses"
                ? "text-[#2A8e9e]"
                : "text-[#333333]"
            }`}
          >
            Course
          </p>
        </Link>
        <p>Bootcamp</p>
        <p>Career Path</p>
        <p>Help Center</p>
      </div>

      {UserEmail ? (
        userDetails
          .filter((user) => user.email === UserEmail)
          .map((user) => (
            <button
              onClick={() => {
                localStorage.clear();
              }}
            >
              <div className="flex text-[#333333] items-center">
                <p className="mr-2 bg-gray-300 rounded-full px-3 py-1 text-white text-2xl font-semibold">
                  {user.name?.charAt(0) || ""}
                </p>
                <div className="text-start mr-2">
                <p className=" font-bold">{user.name}</p>
                <p className="text-gray-400 text-sm">{user.email}</p>
                </div>
                <IoLogOut size={30} /> 
              </div>
            </button>
          ))
      ) : (
        <div>
          <button
            onClick={() => {
              setopenLogin(true);
            }}
            className="border border-[#333333] text-[#333333] px-4 py-1 rounded-full"
          >
            login
          </button>
          <button
            onClick={() => {
              setopeningSignUp(true);
            }}
            className="bg-[#333333] ml-5 text-white px-4 py-1 rounded-full"
          >
            Sign Up
          </button>
        </div>
      )}

      {openLogin && <Login setopenLogin={setopenLogin} />}
      {openingSignUp && <SignUp setopeningSignUp={setopeningSignUp} />}
    </div>
  );
}

export default Navbar;
