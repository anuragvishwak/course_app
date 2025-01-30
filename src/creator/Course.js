import React, { useEffect, useState } from "react";
import AddCourse from "./AddCourse";
import {
  FaDeleteLeft,
  FaDumpster,
  FaPencil,
  FaRupeeSign,
} from "react-icons/fa6";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../FirebaseConfig";
import { MdDelete } from "react-icons/md";

function Course() {
  const [openCourseForm, setopeningCourseForm] = useState(false);
  const [coursesDetails, setcoursesDetails] = useState([]);
  const [category, setcategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("");
  const [selectedSubCategory, setselectedSubCategory] = useState("");
  const [courseLevel, setcourseLevel] = useState("");
  const [courseDuration, setcourseDuration] = useState("");

  async function gatheringcoursesDetails() {
    try {
      const courseDetails = await getDocs(
        collection(database, "course_details")
      );

      let multipleArray = courseDetails.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setcoursesDetails(multipleArray);
      console.log("Fetched Data:", multipleArray);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  }

  async function gettingSubCategory() {
    try {
      const courseDetails = await getDocs(
        collection(database, "course_sub_category")
      );
      let multipleArray = courseDetails.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setsubCategory(multipleArray);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  async function gettingCategory() {
    try {
      const courseDetails = await getDocs(
        collection(database, "course_category")
      );
      let multipleArray = courseDetails.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setcategory(multipleArray);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  useEffect(() => {
    gettingCategory();
    gettingSubCategory();
    gatheringcoursesDetails();
  }, []);

  return (
    <div className="w-full">
      <div className="p-3">
        <div className="flex items-center xl:w-9/12 justify-between">
          <div className="">
            <select
              onClick={(e) => {
                setselectedCategory(e.target.value);
              }}
              className="border w-48 rounded border-gray-300 p-1.5"
            >
              {category?.map((cat) => (
                <option>{cat.category}</option>
              ))}
            </select>
          </div>

          <div>
            <select
              onChange={(e) => {
                setselectedSubCategory(e.target.value);
              }}
              className="border w-48 rounded border-gray-300 p-1.5"
            >
              {subCategory
                ?.filter((cat) => cat.category === selectedCategory)
                .map((cat) => (
                  <option key={cat.id}>{cat.sub_category}</option>
                ))}
            </select>
          </div>

          <div>
            <select
              onChange={(e) => {
                setcourseLevel(e.target.value);
              }}
              className="border w-48 rounded border-gray-300 p-1.5"
            >
              <option>Select level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Professional</option>
            </select>
          </div>

          <div>
            <select
              onChange={(e) => {
                setcourseDuration(e.target.value);
              }}
              className="border w-48 rounded border-gray-300 p-1.5"
            >
              <option>Select Duration</option>
              <option>10 Hours</option>
              <option>20 Hours</option>
              <option>30 Hours</option>
              <option>40 Hours</option>
              <option>50 Hours</option>
            </select>
          </div>
          <button
            onClick={() => {
              setopeningCourseForm(true);
            }}
            className="py-1.5 px-4 rounded bg-[#333333] text-white"
          >
            Add Course
          </button>
        </div>
      </div>
      {openCourseForm && <AddCourse />}
      <hr className="" />
      <div className="p-3">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2  xl:grid-cols-3">
          {coursesDetails.map((course) => (
            <div
              className="bg-white border border-gray-300 p-3 rounded shadow"
              key={course.id}
            >
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">{course.courseTitle}</p>
                <p className="text-[#333333] bg-gray-50 py-1 px-4 rounded-full">
                  {course.courseLevel}
                </p>
              </div>

              <p className="text-sm text-gray-400">
                {course.category}, {course.subCategory}
              </p>

              <p>{course.courseDuration}</p>

              <div className="bg-[#f5feff] p-3 rounded-xl border border-[#2A8e9e] my-3">
                <p className="font-semibold text-[#2A8e9e]">Description</p>
                <p className="text-sm text-[#2A8e9e] line-clamp-2">
                  {course.courseDescription}
                </p>
              </div>

              <div className="flex justify-between">
                <button className="text-[#333333]  border border-[#333333] px-4 py-1 rounded">
                  View Details
                </button>
                <div>
                  <button className="text-red-500 bg-red-50 px-4 py-1 rounded">
                    <div className="flex items-center">
                      <MdDelete className="mr-1" />
                      Delete
                    </div>
                  </button>
                  <button className="text-blue-500 bg-blue-50 px-4 py-1 ml-2 rounded">
                    <div className="flex items-center">
                      <FaPencil className="mr-1" />
                      Update
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;
