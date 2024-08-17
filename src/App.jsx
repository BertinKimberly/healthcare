import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { FaCalendar, FaDownload } from "react-icons/fa";
import Navbar from "./components/Navbar";
import ProfileWidget from "./components/ProfileWidget";
import Chart from "./components/Chart";
import respiratory from "./assets/respiratory rate.svg"
import temperature from "./assets/temperature.svg"

const App = () => {
   const [patients, setPatients] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(
               "https://fedskillstest.coalitiontechnologies.workers.dev",
               {
                  headers: {
                     Authorization: "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0",
                  },
               }
            );
            const data = await response.json();
            console.log(data); // Log the data to inspect the structure
            setPatients(data);
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      };

      fetchData();
   }, []);

   if (!patients.length) {
      return <p>Loading...</p>;
   }

   return (
      <>
         <Navbar />
         <Sidebar patients={patients} />
         <ProfileWidget patientData={patients[0]} />{" "}
         <div className="ml-[320px] mt-6 flex gap-6">
            <div className="flex flex-col gap-6">
               <div className="bg-white rounded-lg p-4">
                  <h2>Diagnosis History</h2>
                  <div className="bg-[#F4F0FE] rounded-lg p-4 flex gap-6 w-full mt-4">
                     <div className="flex-1">
                        {" "}
             
                        <div className="flex justify-between mb-4">
                           <h3>Blood Pressure</h3>
                           <p>Last 6 months</p>
                        </div>
                        <Chart />
                     </div>
                     <div className="flex flex-col ">
                        <div className="pb-2 border-b">
                           <div className="flex">
                              <span>Systolic</span>
                           </div>
                           <h3>160</h3>
                           <span>Higher than Average</span>
                        </div>
                        <div className="">
                           <div className="flex">
                              <span>Diastolic</span>
                           </div>
                           <h3>78</h3>
                           <span>Lower than Average</span>
                        </div>
                     </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                     <div className="bg-[#E0F3FA] rounded-lg flex flex-col gap-4 p-4 w-[230px]">
                        <div className="bg-white flex items-center justify-center p-3 rounded-full w-[100px] h-[100px]">
                           <img
                              src={respiratory}
                              alt="diagnosis"
                           />
                        </div>
                        <p>Respiratory Rate</p>
                        <h4>20 bpm</h4>
                        <small className="mt-2">Normal</small>
                     </div>
                     <div className="bg-[#FFE6E9] rounded-lg flex flex-col gap-4 p-4 w-[230px]">
                        <div className="bg-white flex items-center justify-center p-3 rounded-full w-[100px] h-[100px]">
                           <img
                              src={temperature}
                              alt="diagnosis"
                           />
                        </div>
                        <p>Temperature</p>
                        <h4>98.6 F</h4>
                        <small className="mt-2">Normal</small>
                     </div>
                     <div className="bg-[#E0F3FA] rounded-lg flex flex-col gap-4 p-4 w-[230px]">
                        <div className="bg-white flex items-center justify-center p-3 rounded-full w-[100px] h-[100px]">
                           <img
                              src={respiratory}
                              alt="diagnosis"
                           />
                        </div>
                        <p>Respiratory Rate</p>
                        <h4>20 bpm</h4>
                        <small className="mt-2">Normal</small>
                     </div>
                  </div>
               </div>
               <div className="bg-white rounded-lg p-4">
                  <h3>Diagnostic List</h3>
                  <div className="mt-4">
                     <table>
                        <thead className="bg-[#F6F7F8] p-2 rounded-md">
                           <tr>
                              <th>Problem/Diagnosis</th>
                              <th>Description</th>
                              <th>Status</th>
                           </tr>
                        </thead>
                        <tbody>
                           {patients[0].diagnostic_list.map(
                              (diagnostic, index) => (
                                 <tr key={index}>
                                    <td>{diagnostic.name}</td>
                                    <td>{diagnostic.description}</td>
                                    <td>{diagnostic.status}</td>
                                 </tr>
                              )
                           )}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default App;
