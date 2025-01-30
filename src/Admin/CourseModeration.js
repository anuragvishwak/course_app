import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { database } from "../FirebaseConfig";
import { FaCheck, FaCross, FaRegObjectGroup } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

function CourseModeration() {
  const [coursesDetails, setcoursesDetails] = useState([]);
  const [currentTab, setcurrentTab] = useState("approve");

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

  const updateApprovalStatus = async (courseId, isApproved) => {
    try {
      const courseRef = doc(database, "course_details", courseId);
      await updateDoc(courseRef, {
        approval_by_admin: isApproved,
      });
      console.log(
        `Course ${courseId} updated:`,
        isApproved ? "Approved" : "Rejected"
      );
      alert("successfully done");
      gatheringcoursesDetails();
    } catch (error) {
      console.error("Error updating approval status:", error);
    }
  };

  useEffect(() => {
    gatheringcoursesDetails();
  }, []);

  return (
    <div className="flex">
      <div>
        <AdminNavbar />
      </div>
      <div className="w-full">
        <div className="flex bg-gray-100 text-[#333333] p-1 shadow-inner rounded font-semibold items-center  w-5/12 m-3 justify-between">
          <button
            className={`px-7 py-1 rounded ${currentTab === "approve" ? "bg-white shadow" : ""}`}
            onClick={() => {
              setcurrentTab("approve");
            }}
          >
            Approvals
          </button>
          <button
          className={`px-7 py-1 rounded ${currentTab === "flagged" ? "bg-white shadow" : ""}`}
            onClick={() => {
              setcurrentTab("flagged");
            }}
          >
            Flagged Content
          </button>
          <button
          className={`px-7 py-1 rounded ${currentTab === "report" ? "bg-white shadow" : ""}`}
            onClick={() => {
              setcurrentTab("report");
            }}
          >
            Reports & Complaints
          </button>
        </div>
        <hr />

        {currentTab === "approve" ? (
          <div className="p-3">
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
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

                  <hr className="my-3"/>

                  <div className="flex justify-between">
                    <button className="text-[#333333]  border border-[#333333] px-4 py-1 rounded">
                      View Details
                    </button>
                    <div>
                      <button
                        className="text-white bg-[#333333] px-4 py-1 rounded"
                        onClick={() => updateApprovalStatus(course.id, true)}
                      >
                        <div className="flex items-center">
                          <FaCheck className="mr-1" />
                          Approve
                        </div>
                      </button>
                      <button
                        className="text-white bg-red-500 px-4 py-1 ml-2 rounded"
                        onClick={() => updateApprovalStatus(course.id, false)}
                      >
                        <div className="flex items-center">
                          <MdCancel className="mr-1" />
                          Reject
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CourseModeration;
