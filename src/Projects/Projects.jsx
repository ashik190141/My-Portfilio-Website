import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import ProjectsDisplay from "./ProjectsDisplay";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";


const Projects = () => {
    useTitle("Projects")
    const [records, setRecords] = useState([]);
    const projects = useLoaderData();
    const [text, setText] = useState('All')
    useEffect(() => {
        setRecords(projects);
    }, [])
    
    const handleSearch = (searchText) => {
        setText(searchText);
        if (searchText == "All") {
            setRecords(projects);
        } else {
            setRecords(
              projects.filter((project) => project.type == searchText)
            );   
        }
    };

    return (
      <div className="max-w-7xl mx-auto mt-20">
        <div className="flex justify-end pb-10">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 w-64 flex justify-between"
            >
              <div>{text}</div>
              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64"
            >
              <li
                onClick={() => handleSearch("All")}
                className={`py-1 hover:cursor-pointer font-bold text-[16px] rounded-md pl-5 bg-[#E5E6E6] ${
                  text == "All"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                    : ""
                }`}
              >
                All
              </li>
              <li
                onClick={() => handleSearch("MERN Stack")}
                className={`py-1 hover:cursor-pointer font-bold text-[16px] rounded-md pl-5 bg-[#E5E6E6] ${
                  text == "MERN Stack"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                    : ""
                }`}
              >
                MERN Stack
              </li>
              <li
                onClick={() => handleSearch("Frontend")}
                className={`py-1 hover:cursor-pointer font-bold text-[16px] rounded-md pl-5 bg-[#E5E6E6] ${
                  text == "FrontEnd"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                    : ""
                }`}
              >
                Frontend
              </li>
              <li
                onClick={() => handleSearch("Backend")}
                className={`py-1 hover:cursor-pointer font-bold text-[16px] rounded-md pl-5 bg-[#E5E6E6] ${
                  text == "BackEnd"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                    : ""
                }`}
              >
                Backend
              </li>
              <li
                onClick={() => handleSearch("Mobile App")}
                className={`py-1 hover:cursor-pointer font-bold text-[16px] rounded-md pl-5 bg-[#E5E6E6] ${
                  text == "Mobile App"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                    : ""
                }`}
              >
                Mobile App
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {records?.map((project) => (
            <ProjectsDisplay
              key={project.id}
              project={project}
            ></ProjectsDisplay>
          ))}
        </div>
      </div>
    );
};

export default Projects;