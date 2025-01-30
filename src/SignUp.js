import React from "react";

function SignUp({ setopeningSignUp }) {
  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-5 rounded">
        <div className="flex justify-end">
          <button
            onClick={() => {
              setopeningSignUp(false);
            }}
            className="text-red-500 font-bold"
          >
            Close
          </button>
        </div>
        <div className="flex">
          <div className="w-96 mr-5 h-80 bg-gradient-to-tr from-[#2A8e9e] to-white">
            <p className="text-white p-5 text-3xl font-bold">
              Learn Achieve...
            </p>
          </div>
          <div>
            <div className="">
              <p className="text-center text-3xl font-bold">Get Started</p>
              <p className=" text-gray-400">
                Welcome to sikho - Let's create your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
