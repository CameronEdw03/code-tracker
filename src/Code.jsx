import React, { useState } from 'react';
import { TbLayoutDashboard } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { Link } from 'react-router-dom';

function Code() {
  const [newProj, setNewProj] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const [projects, setProjects] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      id: Date.now(), 
      title: title.trim(),
      techStack: techStack.split(',').map(lang => lang.trim()),
      description: description.trim()
    };

    setProjects([...projects, newProject]);

    setTitle('');
    setTechStack('');
    setDescription('');
    setNewProj(false);
  };

  const handleNewProj = () => {
    setNewProj((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-stone-100 rounded-lg w-[800px] h-[600px] shadow-lg flex">

        
        <div className="h-full w-[300px] bg-white relative px-6 pt-10">
          <h1 className="text-stone-400 font-semibold mb-6">Code Tracker</h1>
          <button className="flex items-center space-x-2 text-black text-sm transition-all duration-300 hover:bg-blue-200/30 w-[276.5px] h-[40px] rounded-l-full rounded-r-none p-4 cursor-pointer">
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
          <button className="flex items-center space-x-2 text-black text-sm transition-all duration-300 hover:bg-blue-200/30 w-[276.5px] h-[40px] rounded-l-full rounded-r-none p-4 cursor-pointer mt-5">
            <FaGithub className="text-blue-300 text-lg" />
            <span>Your Github</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10 overflow-auto">
          <h1 className="text-stone-500 text-xl font-semibold mb-4">Your Project Files</h1>

          <button 
            onClick={handleNewProj}
            className="bg-none w-50 h-8 text-stone-400 flex items-center transition-all duration-300 hover:bg-blue-200/30 hover:rounded-full hover:text-blue-500 hover:scale-105 cursor-pointer"
          >
            <IoIosAdd className="text-[27px]" />
            <span>Create a project file</span>
          </button>

          {newProj && (
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-lg rounded-lg mt-6 p-6 flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Project Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-stone-200 rounded-md placeholder-stone-400 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input 
                type="text"
                placeholder="Tech Stack"
                value={techStack}
                onChange={e => setTechStack(e.target.value)}
                className="w-full text-sm px-3 py-2 border border-stone-200 rounded-md placeholder-stone-400 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <textarea
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows="3"
                className="w-full text-sm px-3 py-2 border border-stone-200 rounded-md placeholder-stone-400 text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <div className="flex justify-end">
                <button className="text-sm px-4 py-1.5 border border-stone-400 text-stone-400 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-transparent hover:scale-105" type="submit">
                  Save
                </button>
              </div>
            </form>
          )}

          {/* Project List */}
          <div className="mt-8 space-y-4">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/Project/${project.id}`}
                state={{ project }} // passing project data to detail page
                className="block bg-white p-4 rounded shadow hover:bg-blue-50 transition"
              >
                <h2 className="text-lg font-semibold text-stone-600">{project.title}</h2>
                <p className="text-sm text-stone-500 mt-1">Tech Stack: {project.techStack.join(', ')}</p>
                <p className="text-sm text-stone-400 mt-1 truncate">{project.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Code;
