import React from "react";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  function clearingOut() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="p-10">
      <button
        onClick={() => {
          clearingOut();
        }}
        className=""
      >
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-400">Logout</p>
          <IoLogOut size={25} className="text-gray-400" />
        </div>
      </button>
    </div>
  );
}

export default Logout;
