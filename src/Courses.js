
import React from "react";
import Navbar from "./Navbar";
import { FaMagnifyingGlass, FaSearchengin } from "react-icons/fa6";
import Products from "./Products";

function Courses() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="xl:flex border p-3 items-center">
          <div className="flex items-center">
            <p className="border-r hidden sm:block text-[#2A8e9e] border-gray-300 sm:text-2xl font-bold px-3">
              All Courses
            </p>
            <input
              placeholder="Search Courses"
              className="p-1 w-full sm:w-60 mr-3 sm:mr-0 sm:mx-3  rounded border border-gray-300"
            ></input>
            <button className="bg-[#333333] text-white py-1 px-3 rounded">
              <div className="flex items-center">
                <FaMagnifyingGlass />
                <p className="ml-2">Search</p>
              </div>
            </button>
          </div>
          <div className="xl:ml-7  xl:w-auto grid   grid- cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 xl:mt-0 gap-2 sm:gap-5">
            <select className="border p-1.5 bg-white border-gray-300 rounded">
              <option>Course Type</option>
              <option>Programming</option>
              <option>Business</option>
              <option>Design</option>
            </select>

            <select className="border p-1.5 bg-white  border-gray-300 rounded">
              <option>Course Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>

            <select className="border p-1.5 bg-white border-gray-300 rounded">
              <option>Course Duration</option>
              <option>10 Hours</option>
              <option>20 Hours</option>
              <option>1 week</option>
            </select>
          </div>
        </div>
        
        
        <div className="p-5 sm:p-10">
          <Products />
        </div>
      </div>
    </div>
  );
}

export default Courses;
