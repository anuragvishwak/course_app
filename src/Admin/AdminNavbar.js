import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Logout from '../Logout';


function AdminNavbar() {
  const findingLocation = useLocation();

  return (
    <div className="w-56 flex flex-col justify-start p-4 border-r h-screen">
      <p  className={`w-full text-left p-2 ${
            findingLocation.pathname === "CreatorCourses"
              ? "text-[#333333]"
              : "text-gray-400"
          }`}>Dashboard</p>
      <Link to={"/CourseModeration"}>
        <p
          className={`w-full text-left p-2 ${
            findingLocation.pathname === "/CourseModeration"
              ? "text-[#333333] border rounded border-[#333333]"
              : "text-gray-400"
          }`}
        >
          Course Moderation
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
          }`}>Creator Management</p>


      <p
        className={`w-full text-left p-2 ${
          findingLocation.pathname === "CreatorCourses"
            ? "text-[#333333]"
            : "text-gray-400"
        }`}
      >
        User Management
      </p>
      <p
        className={`w-full text-left p-2 ${
          findingLocation.pathname === "CreatorCourses"
            ? "text-[#333333]"
            : "text-gray-400"
        }`}
      >
        Support & Helpdesk
      </p>

      <div className='flex h-full justify-center items-end'>
      <Logout />
      </div>
    </div>
  )
}

export default AdminNavbar