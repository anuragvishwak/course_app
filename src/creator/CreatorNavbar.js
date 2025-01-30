import React from "react";
import { Link, useLocation } from "react-router-dom";

function CreatorNavbar() {
  const findingLocation = useLocation();
  return (
    <div className="w-56 flex flex-col justify-start p-4 border-r h-screen">
      <p  className={`w-full text-left p-2 ${
            findingLocation.pathname === "CreatorCourses"
              ? "text-[#333333]"
              : "text-gray-400"
          }`}>Dashboard</p>
      <Link to={"/CreatorCourses"}>
        <p
          className={`w-full text-left p-2 ${
            findingLocation.pathname === "/CreatorCourses"
              ? "text-[#333333] border rounded border-[#333333]"
              : "text-gray-400"
          }`}
        >
          My Courses
        </p>
      </Link>
      <p
        className={`w-full text-left p-2 ${
          findingLocation.pathname === "CreatorCourses"
            ? "text-[#333333]"
            : "text-gray-400"
        }`}
      >
        Student Management
      </p>
      <p  className={`w-full text-left p-2 ${
            findingLocation.pathname === "CreatorCourses"
              ? "text-[#333333]"
              : "text-gray-400"
          }`}>Notification</p>
      <p
        className={`w-full text-left p-2 ${
          findingLocation.pathname === "CreatorCourses"
            ? "text-[#333333]"
            : "text-gray-400"
        }`}
      >
        Marketing & Promotion
      </p>
      <p
        className={`w-full text-left p-2 ${
          findingLocation.pathname === "CreatorCourses"
            ? "text-[#333333]"
            : "text-gray-400"
        }`}
      >
        Account Settings
      </p>
    </div>
  );
}

export default CreatorNavbar;
