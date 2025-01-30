import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../FirebaseConfig";


function AddCourse() {
  const [category, setcategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("");
  const [courseLevel, setcourseLevel] = useState("");
  const [courseTitle, setcourseTitle] = useState("");
  const [selectedSubCategory, setselectedSubCategory] = useState("");
  const [courseDescription, setcourseDescription] = useState("");
  const [courseDuration, setcourseDuration] = useState("");
  const [courseLanguage, setcourseLanguage] = useState("");
  const [videoLink, setvideoLink] = useState("");

  async function submittingCourse() {
    try {
      await addDoc(collection(database, "course_details"), {
        courseTitle: courseTitle,
        category: selectedCategory,
        subCategory: selectedSubCategory,
        courseLevel: courseLevel,
        courseDuration: courseDuration,
        courseLanguage: courseLanguage,
        videoLink: videoLink,
        courseDescription: courseDescription,
        createdAt: new Date(),
      });

      alert("Course details uploaded successfully!");
    } catch (error) {
      console.error("Error uploading course details:", error);
      alert("Failed to upload course details. Please try again.");
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
  }, []);

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-5 rounded">
        <div className="flex mb-5 justify-between  items-center">
          <p className="text-3xl font-bold text-[#333333]">Add Course</p>
          <button className="text-red-500 font-bold">Close</button>
        </div>

        <div className="">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="font-semibold">Course Title:</p>
              <input
                onChange={(e) => {
                  setcourseTitle(e.target.value);
                }}
                placeholder="Introduction to Python"
                className="border w-full rounded border-gray-300 p-1"
              ></input>
            </div>

            <div>
              <p className="font-semibold">Category:</p>
              <select
                onClick={(e) => {
                  setselectedCategory(e.target.value);
                }}
                className="border w-full rounded border-gray-300 p-1.5"
              >
                {category?.map((cat) => (
                  <option>{cat.category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid my-3 grid-cols-2 gap-5">
            <div>
              <p className="font-semibold">Sub Category:</p>
              <select
                onChange={(e) => {
                  setselectedSubCategory(e.target.value);
                }}
                className="border w-full rounded border-gray-300 p-1.5"
              >
                {subCategory
                  ?.filter((cat) => cat.category === selectedCategory)
                  .map((cat) => (
                    <option key={cat.id}>{cat.sub_category}</option>
                  ))}
              </select>
            </div>

            <div>
              <p className="font-semibold">Course Level:</p>
              <select
                onChange={(e) => {
                  setcourseLevel(e.target.value);
                }}
                className="border w-full rounded border-gray-300 p-1.5"
              >
                <option>Select level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Professional</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="font-semibold">Course Duration:</p>
              <select
                onChange={(e) => {
                  setcourseDuration(e.target.value);
                }}
                className="border w-full rounded border-gray-300 p-1.5"
              >
                <option>Select Duration</option>
                <option>10 Hours</option>
                <option>20 Hours</option>
                <option>30 Hours</option>
                <option>40 Hours</option>
                <option>50 Hours</option>
              </select>
            </div>

            <div>
              <p className="font-semibold">Course Language:</p>
              <input
                onChange={(e) => {
                  setcourseLanguage(e.target.value);
                }}
                placeholder="Hindi"
                className="border w-full rounded border-gray-300 p-1.5"
              ></input>
            </div>
          </div>

          <div className="my-3">
            <p className="font-semibold">Course Video Links:</p>
            <input
              onChange={(e) => {
                setvideoLink(e.target.value);
              }}
              placeholder="xhkbsdhdb.youtube.com"
              className="border w-full rounded border-gray-300 p-1"
            ></input>
          </div>

          <div className="">
            <p className="font-semibold">Course Description:</p>
            <textarea
              onChange={(e) => {
                setcourseDescription(e.target.value);
              }}
              className="border w-full h-28 rounded border-gray-300 p-1"
            ></textarea>
          </div>

          <button 
          onClick={()=>{
            submittingCourse();
          }}
          className="w-full  mt-5 p-1 rounded bg-[#333333] text-white">Add Course</button>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
