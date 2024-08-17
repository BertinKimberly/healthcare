import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ProfileWidget from "./components/ProfileWidget";
import Chart from "./components/Chart";
import BounceLoader from "react-spinners/BounceLoader" 

const App = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null); // State for selected patient

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
        setPatients(data);
        setSelectedPatient(data[0]); // Set the first patient as the default
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!patients.length) {
   return (
     <div className="flex items-center justify-center min-h-screen">
       <BounceLoader color="#01F0D0" />
     </div>
   );
 }

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient); // Update selected patient
  };

  return (
    <>
      <Navbar />
      <Sidebar patients={patients} onPatientSelect={handlePatientSelect} />
      {selectedPatient && <ProfileWidget patientData={selectedPatient} />}
      <div className="flex-1 md:ml-[320px] mt-10 flex gap-6 md:w-[58%] ">
        <div className="flex flex-col gap-6 pt-[30px]">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Diagnosis History</h2>
            <div className="bg-[#F4F0FE] rounded-lg p-4 flex gap-6">
              <div className="flex-1">
                <div className="flex justify-between mb-4">
                  <h3>Blood Pressure</h3>
                  <p>Last 6 months</p>
                </div>
                <Chart />
              </div>
              <div className="flex flex-col gap-4">
                <div className="pb-2 border-b">
                  <div className="flex justify-between">
                    <span>Systolic</span>
                    <h3>160</h3>
                  </div>
                  <span>Higher than Average</span>
                </div>
                <div className="pt-2">
                  <div className="flex justify-between">
                    <span>Diastolic</span>
                    <h3>78</h3>
                  </div>
                  <span>Lower than Average</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <div className="bg-[#E0F3FA] rounded-lg p-4 flex flex-col items-center gap-4 w-[230px]">
                <div className="bg-white flex items-center justify-center p-3 rounded-full w-[100px] h-[100px]">
                  <img src="/assets/respiratory rate.svg" alt="Respiratory Rate" />
                </div>
                <p>Respiratory Rate</p>
                <h4>20 bpm</h4>
                <small className="text-green-500">Normal</small>
              </div>
              <div className="bg-[#FFE6E9] rounded-lg p-4 flex flex-col items-center gap-4 w-[230px]">
                <div className="bg-white flex items-center justify-center p-3 rounded-full w-[100px] h-[100px]">
                  <img src="https://firebasestorage.googleapis.com/v0/b/ziba-pay.appspot.com/o/temperature.svg?alt=media&token=90b1989a-e30a-4e26-a86f-519ed810ce64" alt="Temperature" />
                </div>
                <p>Temperature</p>
                <h4>98.6 F</h4>
                <small className="text-green-500">Normal</small>
              </div>
              <div className="bg-[#FFE6E9] rounded-lg p-4 flex flex-col items-center gap-4 w-[230px]">
                <div className="bg-white flex items-center justify-center p-3 rounded-full w-[100px] h-[100px]">
                  <img src="https://firebasestorage.googleapis.com/v0/b/ziba-pay.appspot.com/o/temperature.svg?alt=media&token=90b1989a-e30a-4e26-a86f-519ed810ce64" alt="Temperature" />
                </div>
                <p>Temperature</p>
                <h4>98.6 F</h4>
                <small className="text-green-500">Normal</small>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Diagnostic List</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#F6F7F8] p-2 rounded-md">
                  <tr>
                    <th className="p-2">Problem/Diagnosis</th>
                    <th className="p-2">Description</th>
                    <th className="p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {patients[0].diagnostic_list.map((diagnostic, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-2">{diagnostic.name}</td>
                      <td className="p-2">{diagnostic.description}</td>
                      <td className="p-2">{diagnostic.status}</td>
                    </tr>
                  ))}
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
