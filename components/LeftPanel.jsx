/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsPerson } from "react-icons/bs";

function LeftPanel() {
  return (
    <div className="absolute top-0 left-0 bg-white h-full w-fit py-4 ">
      <div className="flex items-center gap-2 px-4">
        <img
          src="https://media.istockphoto.com/vectors/white-tooth-flat
          -design-vector-id912441172?k=20&m=912441172&s=612x612&w=0&h=s2w6vXvov4denJBMXKHvZ0woLx4Qh33kdg2dn8OGikg="
          className="h-12 w-12"
          alt=""
        />
        <div>
          <p className="font-bold text-lg">Zendenta</p>
          <p className="text-xs text-gray-400">Lorem Ipsum is simply</p>
        </div>
      </div>

      <div className="py-8">
        <div className="px-4 flex gap-4 hover:bg-blue-500 hover:text-white py-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <p className="font-bold">Overview</p>
        </div>

        <div className="px-4 flex gap-4 hover:bg-blue-500 hover:text-white py-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="font-bold">Calender</p>
        </div>

        <div className="px-4 flex gap-4 hover:bg-blue-500 hover:text-white py-4 cursor-pointer">
          <BsPerson className="h-6 w-6 text-gray-500 hover:text-white" />
          <p className="font-bold">Patient List</p>
        </div>

        <div className="px-4 flex gap-4 hover:bg-blue-500 hover:text-white py-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          <p className="font-bold">Messages</p>
        </div>

        <div className="px-4 flex gap-4 hover:bg-blue-500 hover:text-white py-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <p className="font-bold">Payment Information</p>
        </div>

        <div className="px-4 flex gap-4 hover:bg-blue-500 hover:text-white py-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
          <p className="font-bold">Settings</p>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
