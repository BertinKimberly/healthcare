import React from "react";

const Sidebar = ({ patients, onPatientSelect }) => {
  return (
    <div className="bg-white mt-6 rounded-lg w-[300px] p-4 fixed overflow-y-auto h-screen">
      <div className="flex mb-4 justify-between items-center">
        <h2 className="text-xl font-semibold">Patients</h2>
        <img src="https://firebasestorage.googleapis.com/v0/b/ziba-pay.appspot.com/o/search.svg?alt=media&token=54ca80d3-96a0-47b5-a0c1-6d9677ede333" alt="search" className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-4">
        {patients.map((patient, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-100 p-2 rounded-lg cursor-pointer"
            onClick={() => onPatientSelect(patient)} 
          >
            <div className="flex gap-2 items-center">
              <div className="flex items-center justify-center rounded-full w-10 h-10">
                <img
                  src={patient.profile_picture}
                  alt="profile pic"
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium">{patient.name}</h4>
                <p className="text-xs text-gray-600">
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
