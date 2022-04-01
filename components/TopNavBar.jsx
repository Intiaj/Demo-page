import React from "react";
import { BsPerson, BsPlusCircleFill } from "react-icons/bs";
import { IoNotificationsCircleSharp } from "react-icons/io5";

function TopNavBar({ name, setLeftPanel, leftPanel }) {
  return (
    <nav className="flex items-center justify-between py-4 px-4">
      <div className="flex items-center">
        <svg
          onClick={() => setLeftPanel(!leftPanel)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <BsPerson className="text-2xl mx-2 text-blue-500" />
        <p className="font-bold text-xl text-gray-700">{name}</p>
      </div>

      <div className="flex items-center">
        <input
          className="border rounded-2xl px-2 py-1 cursor-pointer"
          placeholder="Search"
        />
        <BsPlusCircleFill className="h-8 w-8 text-blue-600 mx-2 cursor-pointer" />
        <div className="relative">
          <IoNotificationsCircleSharp className="h-8 w-8 text-gray-500 cursor-pointer" />
          <div className="absolute bg-red-500 h-2 w-2 rounded-full top-0 right-0" />
        </div>
      </div>
    </nav>
  );
}

export default TopNavBar;
