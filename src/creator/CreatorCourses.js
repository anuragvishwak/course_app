import React, { useState } from "react";
import CreatorNavbar from "./CreatorNavbar";
import Course from "./Course";

function CreatorCourses() {
  const [currentTab, setcurrentTab] = useState("content");

  return (
    <div className="flex">
      <div>
        <CreatorNavbar />
      </div>
      <div className="w-full">
        <div className="flex font-semibold items-center px-5 py-3 w-4/12 xl:w-3/12 justify-between">
          <button
            className={`${
              currentTab === "content" ? "text-[#2A8e9e] " : "text-[#333333]"
            }`}
            onClick={() => {
              setcurrentTab("content");
            }}
          >
            My Content
          </button>
          <button
            className={`${
              currentTab === "course" ? "text-[#2A8e9e]" : "text-[#333333]"
            }`}
            onClick={() => {
              setcurrentTab("course");
            }}
          >
            Courses
          </button>
          <button
            className={`${
              currentTab === "bootcamp" ? "text-[#2A8e9e]" : "text-[#333333]"
            }`}
            onClick={() => {
              setcurrentTab("bootcamp");
            }}
          >
            Bootcamps
          </button>
        </div>
        <hr />

        <div className="">
          {currentTab === 'course'? 
         <Course/> : '' }
        </div>
      </div>
    </div>
  );
}

export default CreatorCourses;
