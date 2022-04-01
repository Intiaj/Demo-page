import React, { useState } from "react";

function AppointmentDetails({ appointments }) {
  const [selectUpcommingAppointments, setSelectUpcommingAppointments] =
    useState(true);
  const [selectPastAppointments, setSelectPastAppointments] = useState(false);
  const [selectMedicalRecords, setSelectMedicalRecords] = useState(false);

  return (
    <div className="bg-white py-6 rounded-lg">
      <div className="flex bg-[#f2f5fa] w-fit mx-6 p-2 rounded-lg gap-1">
        <div
          onClick={() => {
            setSelectUpcommingAppointments(true);
            setSelectPastAppointments(false);
            setSelectMedicalRecords(false);
          }}
          className={
            selectUpcommingAppointments
              ? "bg-white rounded-lg p-2  text-blue-500 cursor-pointer hover:bri"
              : "bg-transparent text-gray-500 p-2 cursor-pointer hover:bri"
          }
        >
          <p className="text-sm font-bold">Upcomming Appointments</p>
        </div>
        <div
          onClick={() => {
            setSelectUpcommingAppointments(false);
            setSelectPastAppointments(true);
            setSelectMedicalRecords(false);
          }}
          className={
            selectPastAppointments
              ? "bg-white rounded-lg p-2  text-blue-500 cursor-pointer hover:bri"
              : "bg-transparent text-gray-500 p-2 cursor-pointer hover:bri"
          }
        >
          <p className="text-sm font-bold ">Past Appointments</p>
        </div>
        <div
          onClick={() => {
            setSelectUpcommingAppointments(false);
            setSelectPastAppointments(false);
            setSelectMedicalRecords(true);
          }}
          className={
            selectMedicalRecords
              ? "bg-white rounded-lg p-2  text-blue-500 cursor-pointer hover:bri"
              : "bg-transparent text-gray-500 p-2 cursor-pointer hover:bri"
          }
        >
          <p className="text-sm font-bold ">Medical Records</p>
        </div>
      </div>

      <div className="bg-[#f2f5fa] mx-6 my-6 pb-6">
        <div className="mx-6 py-6 flex items-center justify-between">
          <p className="font-bold">Root Canal Treatment</p>
          <button className="flex items-center bg-white px-4 py-2 font-semibold text-gray-500 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
            Show Previous Treatments
          </button>
        </div>
        <hr />

        <div className="">
          <div>
            {selectUpcommingAppointments ? (
              <div className="bg-white flex justify-around mx-4 py-4 my-4 shadow-md rounded">
                <div className="border-r">
                  <p className="py-2 text-xl font-medium pr-4">
                    {appointments["Upcoming Appointments"].Date}
                  </p>
                  <p className="text-xs text-gray-400 font-semibold">
                    {appointments["Upcoming Appointments"].Time}
                  </p>
                </div>
                <div className="border-r pr-4">
                  <p className="text-xs font-semibold text-gray-400 pr-4 my-2">
                    Treatment
                  </p>
                  <p className="font-bold text-xl">
                    {appointments["Upcoming Appointments"].Treatment}
                  </p>
                </div>
                <div className=" pr-4 flex items-center gap-2">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 pr-4 my-2">
                      Dentist
                    </p>

                    <p className="font-bold text-md">
                      {appointments["Upcoming Appointments"].Dentist}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-400 pr-4 my-2">
                      Nurse
                    </p>

                    <p className="font-bold text-md">
                      {appointments["Upcoming Appointments"].Nurse}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-4 text-blue-500 font-semibold cursor-pointer">
                  <svg
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
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <p>Note</p>
                </div>
              </div>
            ) : selectPastAppointments ? (
              <div className="bg-white flex justify-around mx-4 py-4 my-4 shadow-md rounded">
                <div className="border-r">
                  <p className="py-2 text-xl font-medium pr-4">
                    {appointments["Post Appointment"].Date}
                  </p>
                  <p className="text-xs text-gray-400 font-semibold">
                    {appointments["Post Appointment"].Time}
                  </p>
                </div>
                <div className="border-r pr-4">
                  <p className="text-xs font-semibold text-gray-400 pr-4 my-2">
                    Treatment
                  </p>
                  <p className="font-bold text-xl">
                    {appointments["Post Appointment"].Treatment}
                  </p>
                </div>
                <div className=" pr-4 flex items-center gap-2">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 pr-4 my-2">
                      Dentist
                    </p>

                    <p className="font-bold text-md">
                      {appointments["Post Appointment"].Dentist}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-400 pr-4 my-2">
                      Nurse
                    </p>

                    <p className="font-bold text-md">
                      {appointments["Post Appointment"].Nurse}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-4 text-blue-500 font-semibold cursor-pointer">
                  <svg
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
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <p>Note</p>
                </div>
              </div>
            ) : selectMedicalRecords ? (
              <div className="bg-white mx-4 my-4 p-8 shadow-md rounded">
                <p className="text-center text-xs text-gray-400 font-semibold">
                  Status <br />{" "}
                  <span className="text-xl font-bold text-green-400">
                    {appointments["Medical Records"].status}
                  </span>
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentDetails;
