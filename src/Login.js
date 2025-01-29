import React from "react";

function Login() {
  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-6 rounded">
        <div className="flex items-center justify-between">
          <p className="text-[#333333] text-3xl font-bold">Login</p>
          <button className="text-red-500 font-bold">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
