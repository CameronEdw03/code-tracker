import React from 'react';
import { TbLayoutDashboard } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Code() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-stone-100 rounded-lg w-[800px] h-[600px] shadow-lg">
        <div className="h-full w-[300px] bg-white relative px-6 pt-10">
          <h1 className="text-stone-400 font-semibold mb-6">Code Tracker</h1>

          <button className="flex items-center space-x-2 text-black text-sm transition-all duration-300 hover:bg-blue-200/30 w-[276.5px] h-[40px] rounded-l-full rounded-r-none p-4 cursor-pointer">
            <TbLayoutDashboard className="text-blue-300 text-lg" />
            <span>Projects</span>
          </button>
          <button className='flex items-center space-x-2 text-black text-sm transition-all duration-300 hover:bg-blue-200/30 w-[276.5px] h-[40px] rounded-l-full rounded-r-none p-4 cursor-pointer mt-5'>
          <IoCalendarOutline className='text-blue-300 text-lg'/>
          <span>Calendar</span>
          </button>
          <button className='flex items-center space-x-2 text-black text-sm transition-all duration-300 hover:bg-blue-200/30 w-[276.5px] h-[40px] rounded-l-full rouned-r-none p-4 cursor-pointer mt-5'>
          <FaCode className='text-blue-300 text-lg'/>
          <span>Code Snippets</span>
          </button>
          <button className='flex items-center space-x-2 text-black text-sm transition-all duration-300 hover:bg-blue-200/30 w-[276.5px] h-[40px] rounded-l-full rounded-r-none p-4 cursor-pointer mt-5'>
          <FaGithub className='text-blue-300 text-lg'/>
          <span>Your Github</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Code;
