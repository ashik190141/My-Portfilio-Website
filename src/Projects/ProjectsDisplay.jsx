
import { Link } from 'react-router-dom';

const ProjectsDisplay = ({ project }) => {
    const { project_name, technologies, card_img, id, live_site } = project;
    return (
        <div data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="card card-compact w-full md:w-96 h-[720px] text-white shadow-xl bg-amber-700">
                <figure>
                    <img src={card_img} alt="" className='w-full h-[350px] rounded-xl p-1' />
                </figure>
                <div className="card-body">
                    <h2 className="font-semibold text-2xl text-center mt-3">{project_name}</h2>
                    <h2 className="font-semibold text-2xl mt-3">Technologies</h2>
                    <div className="grid grid-cols-2 font-bold">
                        {
                            technologies.map(technology => <p key={project.id} className='text-justify p-2'>{technology}</p>)
                        }
                    </div>
                    <div>
                        <div className="card-actions absolute bottom-5 left-5">
                            <button className="btn btn-neutral"><a href={live_site}>Live Site</a></button>
                        </div>
                        <div className="card-actions absolute bottom-5 right-5">
                            <Link to={`/projects/${id}`}><button className="btn">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDisplay;