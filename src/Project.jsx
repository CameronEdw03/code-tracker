import React, { useState } from 'react';
import { RiSideBarFill } from "react-icons/ri";
import { TbLayoutDashboard } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Project() {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center min-h-screen relative">
      <div className="bg-stone-100 rounded-lg w-[800px] h-[600px] shadow-lg flex overflow-hidden relative">

        {/* Toggle Button */}
        <button
          className="absolute top-4 left-4 text-stone-400 text-[20px] transition-all duration-300 hover:scale-105 hover:text-black z-20"
          onClick={handleSidebar}
        >
          <RiSideBarFill />
        </button>

        {/* Sidebar */}
        <div
          className={`
            absolute top-0 left-0 h-full w-[300px] bg-white px-6 pt-10 shadow-md z-10
            transform transition-transform duration-300 ease-in-out
            ${sidebar ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <h1 className="text-stone-400 font-semibold mb-6">Code Tracker</h1>
          <button className="flex items-center space-x-2 text-black text-sm transition-all duration-300 bg-blue-200/30 w-[276.5px] h-[40px] rounded-l-full rounded-r-none p-4 cursor-pointer">
            <TbLayoutDashboard className="text-blue-300 text-lg" />
            <span>Projects</span>
          </button>
          <button className="flex items-center space-x-2 text-black text-sm transition-all duration-300 hover:bg-blue-200/30 w-[276.5px]  h-[40px] rounded-l-full rounded-r-none p-4 cursor-pointer mt-5">
            <IoCalendarOutline className="text-blue-300 text-lg" />
            <span>Calendar</span>
          </button>
          <button className="flex items-center space-x-2 text-black text-sm transition-all duration-300 hover:bg-blue-200/30 w-[276.5px]  h-[40px] rounded-l-full rounded-r-none p-4 cursor-pointer mt-5">
            <FaCode className="text-blue-300 text-lg" />
            <span>Code Snippets</span>
          </button>
          <button className="flex items-center space-x-2 text-black text-sm transition-all duration-300 hover:bg-blue-200/30 w-full h-[40px] rounded-l-full rounded-r-none p-4 cursor-pointer mt-5">
            <FaGithub className="text-blue-300 text-lg" />
            <span>Your Github</span>
          </button>
        </div>

       
        <div className="flex-1 p-10 z-0">
          <h2 className="text-stone-600 font-semibold text-xl">Project Details Page</h2>
         
        </div>
      </div>
    </div>
  );
}

export default Project;
