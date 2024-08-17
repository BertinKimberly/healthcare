import React, { useState } from "react";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const linkClasses = (linkName) =>
    `flex items-center space-x-2 px-3 py-2 rounded-md ${
      activeLink === linkName ? "bg-[#01F0D0] rounded-full" : "bg-white"
    }`;

  return (
    <div>
      <nav className="bg-white shadow-lg h-16 flex items-center justify-between px-6 rounded-xl fixed top-0 left-0 w-full z-50">
        <div className="flex items-center">
          <img src="/assets/TestLogo.svg" alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="flex space-x-6">
          <div className={linkClasses("Overview")} onClick={() => handleLinkClick("Overview")}>
            <img src="/assets/home.svg" alt="Overview" className="h-6 w-6" />
            <a href="#" className="text-gray-800 font-medium">
              Overview
            </a>
          </div>
          <div className={linkClasses("Patient")} onClick={() => handleLinkClick("Patient")}>
            <img src="/assets/account.svg" alt="Patient" className="h-6 w-6" />
            <a href="#" className="text-gray-800 font-medium">
              Patient
            </a>
          </div>
          <div className={linkClasses("Schedule")} onClick={() => handleLinkClick("Schedule")}>
            <img src="/assets/calendar.svg" alt="Schedule" className="h-6 w-6" />
            <a href="#" className="text-gray-800 font-medium">
              Schedule
            </a>
          </div>
          <div className={linkClasses("Messages")} onClick={() => handleLinkClick("Messages")}>
            <img src="/assets/chat.svg" alt="Messages" className="h-6 w-6" />
            <a href="#" className="text-gray-800 font-medium">
              Messages
            </a>
          </div>
          <div className={linkClasses("Transactions")} onClick={() => handleLinkClick("Transactions")}>
            <img src="/assets/transaction.svg" alt="Transactions" className="h-6 w-6" />
            <a href="#" className="text-gray-800 font-medium">
              Transactions
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <img src="/assets/doctor.png" alt="Dr. Jose Simons" className="h-10 w-10 rounded-full object-cover" />
          <div className="text-sm">
            <h1 className="font-semibold text-gray-900 text-sm">Dr. Jose Simons</h1>
            <p className="text-gray-600">General Practitioner</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
