import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import ProjectsDisplay from "./ProjectsDisplay";


const Projects = () => {
    useTitle("Projects")
    const projects = useLoaderData();
    console.log(projects);
    return (
        <div className="max-w-7xl mx-auto mt-32 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    projects.map(project => <ProjectsDisplay
                        key={project.id}
                        project={project}
                    ></ProjectsDisplay>)
                }
            </div>
        </div>
    );
};

export default Projects;