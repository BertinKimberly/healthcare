import React from "react";
import { FaCalendar, FaDownload, FaPhone, FaUserShield, FaHeartbeat } from "react-icons/fa";

const ProfileWidget = ({ patientData }) => {
  return (
    <div className="fixed top-30 right-6 w-[300px]">
      <div className="bg-white p-4 rounded-lg flex flex-col items-center gap-4">
        <div className="flex items-center justify-center rounded-full h-40 w-40">
          <img
            src={patientData.profile_picture}
            alt="profile pic"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <h3 className="text-lg font-semibold">{patientData.name}</h3>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-4 items-center">
            <FaCalendar className="text-gray-600" />
            <div>
              <p className="text-sm text-gray-500">Date Of Birth</p>
              <p className="text-base">{new Date(patientData.date_of_birth).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <FaHeartbeat className="text-gray-600" />
            <div>
              <p className="text-sm text-gray-500">Gender</p>
              <p className="text-base">{patientData.gender}</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <FaPhone className="text-gray-600" />
            <div>
              <p className="text-sm text-gray-500">Contact</p>
              <p className="text-base">{patientData.phone_number}</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <FaUserShield className="text-gray-600" />
            <div>
              <p className="text-sm text-gray-500">Emergency Contact</p>
              <p className="text-base">{patientData.emergency_contact}</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <FaUserShield className="text-gray-600" />
            <div>
              <p className="text-sm text-gray-500">Insurance Provider</p>
              <p className="text-base">{patientData.insurance_type}</p>
            </div>
          </div>
        </div>

        <button className="bg-blue-500 text-white rounded-lg py-2 px-4 w-full">
          Show All Information
        </button>
      </div>

      <div className="bg-white rounded-lg p-4 mt-4">
        <h3 className="text-lg font-semibold mb-4">Lab Results</h3>
        <div className="flex flex-col gap-2">
          {patientData.lab_results.map((result, index) => (
            <div key={index} className="flex justify-between items-center">
              <p>{result}</p>
              <FaDownload className="text-gray-600 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileWidget;
