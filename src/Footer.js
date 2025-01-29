import React from "react";

function Footer() {
  return (
    <div className="bg-[#2A8e9e] p-5">
      <div>
        <p className="text-3xl text-white font-bold italic">Sikho</p>
      </div>

      <div className="sm:flex justify-between m-5 sm:m-10">
        <div className="flex flex-col w-80">
          <p className="text-lg font-bold text-white">Stay Updated</p>
          <input
            placeholder="Connect with us..."
            className="border text-white border-white bg-[#2A8e9e] p-2 rounded"
          ></input>
          <button className="bg-white mt-2 rounded p-2 text-[#2A8e9e]">
            Subscribe
          </button>
        </div>
        <div className="flex text-white justify-between mt-5 sm:mt-0 sm:w-96">
          <div>
            <p className="text-lg font-bold">Company</p>
            <p>About</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Contact</p>
            <p>Block</p>
          </div>

          <div>
            <p className="text-lg font-bold">Support</p>

            <p>Documentation</p>
            <p>FAQ</p>
            <p>Support</p>
          </div>

          <div>
            <p className="text-lg font-bold">Social</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>

      <hr className="my-2"/>
      <div className="sm:flex text-white items-end justify-between">
        <div>
          <p className="font-bold">10X your workflow with Us</p>
          <p className="text-sm">
            Save your countless time wasting in attending classes.
          </p>
        </div>
        <p className="text-sm">@2077 Untitled UI. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
