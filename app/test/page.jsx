"use client";
import { useState } from "react";

export default function TestComponent() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className="flex-col md:flex-row md:px-3 flex items-center justify-between bg-purple-700 py-3 px-3">
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1>logo</h1>
          <button
            className="text-white bg-blue-700 rounded-lg hover:bg-blue-800 md:hidden"
            onClick={handleClick}
          >
            {toggle ? "Hide" : "Show"}
          </button>
        </div>

        <ul className={`md:flex-row md:flex ${toggle ? "block" : "hidden"}`}>
          <li className="my-2 md:ml-5">
            <a href="#" className="text-white">
              Product
            </a>
          </li>
          <li className="my-2 md:ml-5">
            <a href="#" className="text-white">
              About Us
            </a>
          </li>
          <li className="my-2 md:ml-5">
            <a href="#" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <h1>Test Component</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-2">
        <div className="bg-gray-400 p-4"></div>
        <div className="bg-gray-400 p-4"></div>
        <div className="bg-gray-400 p-4"></div>
        <div className="bg-gray-400 p-4"></div>
        <div className="bg-gray-400 p-4"></div>
        <div className="bg-gray-400 p-4"></div>
        <div className="bg-gray-400 p-4"></div>
        <div className="bg-gray-400 p-4"></div>
      </div>
    </>
  );
}
