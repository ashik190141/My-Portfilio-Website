import { Link } from 'react-router-dom';
import './Project.css';

const ProjectsDisplay = ({ project }) => {
    const { project_name, technologies, card_img, id, live_site } = project;

    return (
        <div data-aos="zoom-in-up" data-aos-duration="1000">
             
             <div className='caard'>
                <div className='face front'>
                     <img src={card_img} alt="" />
                     <h3>{project_name}</h3>
                </div>

                <div className='face back'>
                    <p className='text-2xl font-bold'>{project_name}</p>
                    <h2 className='text-xl font-serif'>Technologies</h2>
                    <div className="grid grid-cols-2">
                        {
                            technologies.map(technology => <p className='text-center p-2'  key={project.id}>{technology}</p>)
                        }
                    </div>
                    <div className='' >
                        <div className="flex items-center justify-between link">
                        <a href={live_site}>Live Site</a>
                        <Link to={`/projects/${id}`}>View Details</Link>
                        </div>
                    </div>

                
                </div>

             </div>

        </div>
    );
};

export default ProjectsDisplay;