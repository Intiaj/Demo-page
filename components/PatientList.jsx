import React from "react";
import { BsPrinterFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

function PatientList({ name }) {
  return (
    <div className="border-t border-b py-2 px-8 flex items-center justify-between">
      <div className="flex items-center">
        <p className="text-blue-500 font-semibold cursor-pointer ">
          Patient List
        </p>
        <p className="font-light text-lg px-2">{">"}</p>
        <p className="text-gray-400 font-semibold ">{name}</p>
      </div>

      <div className="flex gap-1">
        <BsPrinterFill className="border h-8 w-8 p-2 bg-white rounded text-gray-500 cursor-pointer hover:bg-gray-100" />
        <div className="border h-8 p-2 bg-white rounded flex items-center gap-1 cursor-pointer hover:bg-gray-100">
          <FiEdit className="text-gray-500" />
          <p className="font-semibold text-gray-500 ">Edit Patient</p>
        </div>
      </div>
    </div>
  );
}

export default PatientList;
