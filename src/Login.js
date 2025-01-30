import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, database } from "./FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

function Login({ setopenLogin }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [userDetails, setuserDetails] = useState([]);

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

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("email", email);

      const userDoc = userDetails.find((user) => user.email === email);

      if (userDoc) {
        const userRole = userDoc.role;
        if (userRole === "creator") {
          navigate("/CreatorDashboard");
        } else if (userRole === "admin") {
          navigate("/AdminDashboard");
        } else {
          navigate("/");
        }
        setopenLogin(false);
      } else {
        console.log("User not found in database");
      }
    } catch (error) {
      console.log("Something went wrong...", error);
    }
  };

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white m-5 p-6 rounded">
        <div className="flex items-center justify-end">
          <button
            onClick={() => {
              setopenLogin(false);
            }}
            className="text-red-500 font-bold"
          >
            Close
          </button>
        </div>

        <div className="flex">
          <div className="w-96 hidden lg:block mr-5 h-80 bg-gradient-to-tr from-[#2A8e9e] to-white">
            <p className="text-white p-5 mt-60 text-3xl font-bold">
              Learn Achieve...
            </p>
          </div>

          <div>
            <div className="">
              <p className="text-center text-3xl font-bold">Welcome Back</p>
              <p className=" text-gray-400">
                Enter your email and password to access your account.
              </p>
            </div>
            <div className="my-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="w-full">
                  <p className="text-[#333333] font-semibold">Email</p>
                  <input
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    className="border p-1 w-full rounded border-gray-300"
                  ></input>
                </div>
                <div className="">
                  <p className="text-[#333333]  font-semibold">Password</p>
                  <input
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    className="border p-1 rounded w-full border-gray-300"
                  ></input>
                </div>
              </div>

              <button
                onClick={() => {
                  handleLogin();
                }}
                className="bg-[#333333] font-semibold mt-5  text-white w-full py-2 rounded "
              >
                Login
              </button>
            </div>
            <div className="flex items-center justify-center">
              <p>Don't have an account?</p>
              <button className="text-[#2A8e9e] ml-2 font-bold ">SignUp</button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
