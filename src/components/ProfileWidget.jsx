import React from 'react'
import { FaCalendar, FaDownload } from "react-icons/fa";

const ProfileWidget = ({patientData}) => {
  return (
    <div className="fixed top-0 right-0">
    <div className="bg-white p-4 rounded-lg flex flex-col gap-4 items-center justify-center">
    <div className="flex items-center justify-center rounded-full">
      <img src={patientData.profile_picture} alt="profile pic" />
    </div>
    <h3>{patientData.name}</h3>
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex p-2 rounded-full bg-gray-400 items-center justify-center">
          <FaCalendar />
        </div>
        <div>
          <p>Date Of Birth</p>
          <p>{new Date(patientData.date_of_birth).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
    <button className="rounded-lg p-6">Show All Information</button>
  </div>
  <div className="bg-white rounded-lg p-4">
    <h3>Lab Results</h3>
    <div className="flex flex-col gap-2">
      {patientData.lab_results.map((result, index) => (
        <div key={index} className="flex justify-between">
          <p>{result}</p>
          <FaDownload />
        </div>
      ))}
    </div>
  </div>
  </div>
  )
}

export default ProfileWidget
