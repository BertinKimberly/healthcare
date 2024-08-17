import React from "react";
import Search from "../assets/search.svg";

const Sidebar = ({ patients }) => {
  return (
    <div className="bg-white rounded-lg w-[300px] p-3 t-[100px] fixed overflow-y-auto h-screen">
      <div className="flex mb-4 justify-between items-center">
        <h2>Patients</h2>
        <img src={Search} alt="search" className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-4">
        {patients.map((patient, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex gap-2">
              <div className="flex items-center justify-center rounded-full w-10 h-10">
                <img
                  src={patient.profile_picture}
                  alt="profile pic"
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium">{patient.name}</h4>
                <p className="text-xs text-gray-600">{patient.gender}, {patient.age}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
