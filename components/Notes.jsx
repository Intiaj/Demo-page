import React from "react";
import { BsPerson } from "react-icons/bs";

function Notes({ doctorName, createdAt }) {
  return (
    <div className="bg-white mt-4 rounded-xl">
      <div className="my-6 mx-6 flex justify-between">
        <p className="font-bold">Notes</p>
        <p className="font-bold text-sm text-blue-500 cursor-pointer hover:brightness-90">
          See all
        </p>
      </div>

      <div className="mx-1 my-4 bg-[#f0f1f6] px-6 text-sm py-6 relative rounded">
        <p>
          - Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p>
          - Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p>
          - Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <button className="bg-blue-500 p-2 shadow-sm rounded-md text-bold text-white hover:brightness-90 absolute bottom-4 right-4">
          Save Note
        </button>
      </div>

      <div className="my-6 mx-6 font-semibold">
        <p>Lorem Ipsum is simply dummy text</p>
        <div className="flex py-2 items-center justify-between">
          <div className="flex items-center">
            <BsPerson className="text-blue-500" />
            <p className="pl-2 text-sm text-gray-400 font-normal">
              {doctorName}
            </p>
          </div>

          <div>
            <p className="font-normal text-sm text-gray-400">
              {createdAt.slice(0, 9)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
