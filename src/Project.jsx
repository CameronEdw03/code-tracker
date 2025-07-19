import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import { RiSideBarFill } from "react-icons/ri";
import { TbLayoutDashboard } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { FaCode, FaGithub } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { useNavigate } from 'react-router-dom';


function Project() {
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation(); 
  const { project } = location.state || {}; 
  const [task, setTask] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate()


  if (!project) {
    return <p>No project data found.</p>;
  }

  const handleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  const addTasks = () => {
    if (input.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };
    setTask([...task, newTask]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTask(task.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTask(task.filter(t => t.id !== id));
  };


  return (
    <div className="flex justify-center items-center min-h-screen relative">
      
      <div className="bg-stone-100 rounded-lg w-[800px] h-[600px] shadow-lg flex overflow-hidden relative">
      <button className='absolute top-4 right-4 text-stone-500 transition-all duration-300 hover:text-blue-500 hover:scale-105 cursor-pointer z-20 text-[20px]' onClick={() => navigate('/code')}><GoHomeFill /></button>
        {/* Toggle Sidebar Button */}
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
          <button className="flex items-center space-x-2 text-black text-sm transition-all duration-300 hover:bg-blue-200/30 w-[276.5px] h-[40px] rounded-l-full rounded-r-none p-4 cursor-pointer mt-5">
            <IoCalendarOutline className="text-blue-300 text-lg" />
            <span>Calendar</span>
          </button>
          <button className="flex items-center space-x-2 text-black text-sm transition-all duration-300 hover:bg-blue-200/30 w-[276.5px] h-[40px] rounded-l-full rounded-r-none p-4 cursor-pointer mt-5">
            <FaCode className="text-blue-300 text-lg" />
            <span>Code Snippets</span>
          </button>
          <button className="flex items-center space-x-2 text-black text-sm transition-all duration-300 hover:bg-blue-200/30 w-full h-[40px] rounded-l-full rounded-r-none p-4 cursor-pointer mt-5">
            <FaGithub className="text-blue-300 text-lg" />
            <span>Your Github</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10 z-0">
          <h2 className="text-stone-600 font-semibold text-[40px]">{project.title}</h2>
          <p className="text-stone-500">Tech Stack: {project.techStack.join(', ')}</p>
          <p className="text-stone-500">Description: {project.description}</p>

          <label className="text-stone-400 font-semibold mt-10 block ml-10 text-[25px]">Upcoming Tasks</label>
          
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                addTasks();
              }
            }}
            placeholder="Add Task"
            className="bg-transparent placeholder-stone-500 focus:outline-none text-black focus:ring-0 border-none transition-all duration-300 hover:scale-105 cursor-pointer mt-5 ml-10 w-full"
          />

          <ul className="space-y-2 mt-4 ml-10">
            {task.map(t => (
              <li key={t.id} className="flex items-center text-black justify-between pr-4">
                <span
                  onClick={() => toggleTask(t.id)}
                  className={`cursor-pointer ${t.completed ? 'line-through text-gray-500' : ''}`}
                >
                  {t.text}
                </span>
                <button onClick={() => deleteTask(t.id)} className="text-stone-400 transition-all duration-300 hover:text-blue-500 hover:scale-105 cursor-pointer"><FaTrashCan /></button>
              </li>
            ))}
          </ul>
          <button className='text-stone-400 flex items-center space-x-2 mt-40 rounded-full hover:bg-blue-200/30 transition-all duration-300 hover:scale-105 hover:text-blue-500 cursor-pointer w-[230px] h-[30px] p-4'><IoCalendarOutline className='mr-2'/>Add tasks to calendar</button>
        </div>
      </div>
    </div>
  );
}

export default Project;
