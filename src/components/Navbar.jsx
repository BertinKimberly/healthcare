import React from "react";

const Navbar = () => {
   return (
      <div>
         <nav class="bg-white shadow-lg h-16 flex items-center justify-between px-6 rounded-xl">
            <div class="flex items-center">
               <img
                  src="../assets/TestLogo.svg"
                  alt="Logo"
                  class="h-10 w-auto"
               />
            </div>

            <div class="flex space-x-6">
               <div class="flex items-center space-x-2">
                  <img
                     src="../assets/home.svg"
                     alt="Overview"
                     class="h-6 w-6"
                  />
                  <a
                     href="#"
                     class="text-gray-800 hover:text-blue-600 font-medium"
                  >
                     Overview
                  </a>
               </div>
               <div class="flex items-center space-x-2">
                  <img
                     src="../assets/account.svg"
                     alt="Patient"
                     class="h-6 w-6"
                  />
                  <a
                     href="#"
                     class="text-gray-800 hover:text-blue-600 font-medium"
                  >
                     Patient
                  </a>
               </div>
               <div class="flex items-center space-x-2">
                  <img
                     src="../assets/calendar.svg"
                     alt="Schedule"
                     class="h-6 w-6"
                  />
                  <a
                     href="#"
                     class="text-gray-800 hover:text-blue-600 font-medium"
                  >
                     Schedule
                  </a>
               </div>
               <div class="flex items-center space-x-2">
                  <img
                     src="../assets/chat.svg"
                     alt="Messages"
                     class="h-6 w-6"
                  />
                  <a
                     href="#"
                     class="text-gray-800 hover:text-blue-600 font-medium"
                  >
                     Messages
                  </a>
               </div>
               <div class="flex items-center space-x-2">
                  <img
                     src="../assets/transaction.svg"
                     alt="Transactions"
                     class="h-6 w-6"
                  />
                  <a
                     href="#"
                     class="text-gray-800 hover:text-blue-600 font-medium"
                  >
                     Transactions
                  </a>
               </div>
            </div>

            <div class="flex items-center space-x-3">
               <img
                  src="../assets/doctor.png"
                  alt="Dr. Jose Simons"
                  class="h-10 w-10 rounded-full object-cover"
               />
               <div class="text-sm">
                  <h1 class="font-semibold text-gray-900">Dr. Jose Simons</h1>
                  <p class="text-gray-600">General Practitioner</p>
               </div>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
