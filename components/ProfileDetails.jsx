/* eslint-disable @next/next/no-img-element */
import React from "react";

function ProfileDetails({ data }) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-2 ">
      <div className="px-8 py-8 bg-white rounded-l-xl">
        <div className="flex items-center justify-center">
          <img
            src="https://i.pinimg.com/236x/b9/9c/3a/b99c3a9bbd67aa74d21dafaba60ac551--beautiful-people-beautiful-things.jpg"
            className="h-24 w-24 rounded-full object-contain bg-cyan-100 "
            alt=""
          />
        </div>

        <p className="font-bold text-xl text-center text-gray-700 py-2">
          {data.name}
        </p>

        <p className="text-center text-sm text-gray-500">
          {data["e-email"]}@example.com
        </p>

        <div className="flex items-center justify-between gap-4 py-2 mx-4">
          <div className="text-center">
            <p className="font-bold ">{data.Past}</p>
            <p className="text-xs  text-gray-500">Past</p>
          </div>

          <p className="text-gray-500">|</p>
          <div className="text-center">
            <p className="font-bold ">2</p>
            <p className="text-xs  text-gray-500">Upcomming</p>
          </div>
        </div>

        <button className="w-full text-sm font-bold py-1 border rounded-md my-2 hover:bg-gray-100">
          Send Message
        </button>
      </div>

      <div className="col-span-2 place-items-center px-8 py-8 bg-white rounded-r-xl">
        <div className="col-span-1 grid grid-cols-3 gap-4">
          <div>
            <p className="text-gray-500 font-bold py-2">Gender</p>
            <p className="text-gray-700 font-semibold text-sm">{data.Gender}</p>
            <hr className="my-2" />
          </div>

          <div>
            <p className="text-gray-500 font-bold py-2">Birthday</p>
            <p className="text-gray-700 font-semibold text-sm">
              {data.Birthday}
            </p>
            <hr className="my-2" />
          </div>
          <div>
            <p className="text-gray-500 font-bold py-2">Phone Number</p>
            <p className="text-gray-700 font-semibold text-sm">
              {data["Phone Number"]}
            </p>
            <hr className="my-2" />
          </div>
        </div>

        <div className="col-span-1 grid grid-cols-3 gap-4">
          <div>
            <p className="text-gray-500 font-bold py-2">Street Address</p>
            <p className="text-gray-700 font-semibold text-sm">
              {data["Street Address"]}
            </p>
            <hr className="my-2" />
          </div>
          <div>
            <p className="text-gray-500 font-bold py-2">City</p>
            <p className="text-gray-700 font-semibold text-sm">Cilacap</p>
            <hr className="my-2" />
          </div>
          <div>
            <p className="text-gray-500 font-bold py-2">Zip Code</p>
            <p className="text-gray-700 font-semibold text-sm">
              {data["ZIP Code"]}
            </p>
            <hr className="my-2" />
          </div>
        </div>

        <div className="col-span-1 grid grid-cols-3 gap-4">
          <div>
            <p className="text-gray-500 font-bold py-2">Member Status</p>
            <p className="text-gray-700 font-semibold text-sm">
              {"Active Member"}
            </p>
            <hr className="my-2" />
          </div>
          <div>
            <p className="text-gray-500 font-bold py-2">Registered Date</p>
            <p className="text-gray-700 font-semibold text-sm">
              {data["Register Date"]}
            </p>
            <hr className="my-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
