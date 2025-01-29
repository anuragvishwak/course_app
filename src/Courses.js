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
        <div className="flex border p-3 items-center">
          <div className="flex items-center">
            <p className="border-r text-[#2A8e9e] border-gray-300 text-2xl font-bold px-3">
              All Courses
            </p>
            <input
              placeholder="Search Courses"
              className="p-1 w-60 mx-3  rounded border border-gray-300"
            ></input>
            <button className="bg-[#333333] text-white py-1 px-3 rounded">
              <div className="flex items-center">
                <FaMagnifyingGlass />
                <p className="ml-2">Search</p>
              </div>
            </button>
          </div>
          <div className="flex items-center ml-7 justify-between w-5/12">
            <select className="border p-1.5 w-48 border-gray-300 rounded">
              <option>Course Type</option>
              <option>Programming</option>
              <option>Business</option>
              <option>Design</option>
            </select>

            <select className="border p-1.5 w-48 border-gray-300 rounded">
              <option>Course Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>

            <select className="border p-1.5 w-48 border-gray-300 rounded">
              <option>Course Duration</option>
              <option>10 Hours</option>
              <option>20 Hours</option>
              <option>1 week</option>
            </select>
          </div>
        </div>
        
        
        <div className="p-10">
          <Products />
        </div>
      </div>
    </div>
  );
}

export default Courses;
