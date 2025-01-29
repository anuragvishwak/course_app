import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import Footer from "./Footer";
import { FaCheck, FaShield } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";

function LandingPage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="w-full">
        <div className="py-10 sm:py-20 w-full text-center px-5 sm:px-20">
          <p className="text-2xl sm:text-5xl text-[#333333]">
            Unlock Your Potential, One Course at a Time –
          </p>
          <p className="text-2xl sm:text-5xl text-[#2A8e9e] font-bold">
            Learn Smarter, Achieve Faster!
          </p>
          <div className="flex mt-5 justify-center">
            <p className="text-sm text-gray-400 sm:w-7/12">
              Discover a world of knowledge at your fingertips with SIKHO.
              Whether you're looking to advance your career, pick up a new
              skill, or simply explore your passions, our curated courses offer
              expert-led, flexible learning tailored to your goals.
            </p>
          </div>
        </div>

        <div className="bg-[#ebf8fa] p-5 sm:p-10">
          <div className="justify-center mb-5 text-3xl font-bold flex items-center">
            <p className="text-[#333333]">Our best</p>
            <p className="ml-1.5 text-[#2A8e9e]">Courses</p>
          </div>
          <Products />
        </div>

        <div className="border py-28 px-10">
          <div className="mb-10">
            <p className="text-3xl sm:text-4xl font-bold text-[#333333]">
              Experience that grows with your knowledge.
            </p>
            <p className="text-[#2A8e9e] text-sm sm:text-base">
              Design your learning journey with personalized courses and
              streamlined progress tracking for continuous growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="">
          <div className="flex items-center">
          <GiGraduateCap size={25} className="bg-[#2A8e9e] mr-2 p-1 rounded shadow text-white" />
          <p className="font-bold text-xl">Expert-led courses</p>
          </div>
            <p>
              Access premium educational content from industry experts and learn
              at your own pace with flexible scheduling options.
            </p>
          </div>
          <div className="">
          <div className="flex items-center">
          <IoBookSharp size={25} className="bg-[#2A8e9e] mr-2 p-1 rounded shadow text-white" />
          <p className="font-bold text-xl">Multiple formats</p>
          </div>
            <p>
              Engage with diverse learning materials including video lectures,
              interactive quizzes, and hands-on projects.
            </p>
          </div>

          <div className="">
           <div className="flex items-center">
           <FaShield size={25} className="bg-[#2A8e9e] mr-2 p-1 rounded shadow text-white" />
           <p className="font-bold text-xl">Verified certificates</p>
           </div>
            <p>
              Earn industry-recognized certificates upon completion and showcase
              your achievements to potential employers.
            </p>
          </div>
          </div>
        </div>

        {/* <div className="flex items-center  justify-center py-20 ">
          <div className="grid grid-cols-3 gap-5">
            <Image
              src="/CEAT_Logo.svg.png"
              alt="Example image"
              width={170}
              height={170}
            />

            <Image
              src="/Capgemini_Logo_2COL_RGB.png"
              alt="Example image"
              width={170}
              height={170}
            />

            <Image
              src="/Cipla_logo.svg.png"
              alt="Example image"
              width={170}
              height={170}
            />

            <Image
              src="/Axis_Bank_logo.svg.png"
              alt="Example image"
              width={170}
              height={170}
            />

            <Image
              src="/6985_Apollo.jpg"
              alt="Example image"
              width={170}
              height={170}
            />

            <Image
              src="/Adobe-social-share-image.jpg"
              alt="Example image"
              width={170}
              height={170}
            />
          </div>
          <div className="w-5/12 text-[#333333] ml-20">
            <div className="flex">
              <p className="text-[#2A8e9e] mb-2 border-2 border-[#2A8e9e] py-1 px-4 rounded-full font-semibold">
                Why you need dekho
              </p>
            </div>
            <p className="text-2xl font-semibold">
              Courses or bootcamps are available at Dekho, choose what you like
            </p>

            <p className="text-gray-400 my-5">
              Transform your future with Dekho! 🚀 Whether you're a beginner or
              looking to level up, our expertly crafted courses offer hands-on
              learning, real-world skills, and flexible pacing to fit your
              lifestyle. Join thousands of learners and unlock your potential
              today. Enroll now and take the first step toward success!
            </p>

            <div className="flex mb-2 font-semibold text-[#333333] items-center">
              <FaCheck
                size={24}
                className="border border-[#2A8e9e] text-[#2A8e9e] p-1 rounded-full"
              />
              <p className="ml-2 text-[#2A8e9e]">
                100+ Course Category (Design, Coding, etc)
              </p>
            </div>

            <div className="flex font-semibold text-[#333333] items-center">
              <FaCheck
                size={24}
                className="border border-[#2A8e9e] text-[#2A8e9e] p-1 rounded-full"
              />
              <p className="ml-2 text-[#2A8e9e]">
                Online or offline Event that you can join.
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
