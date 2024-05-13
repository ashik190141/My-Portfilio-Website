import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import { TypeAnimation } from 'react-type-animation';

const ProjectDetails = () => {
    const targetProject = useLoaderData();
    const pageTitle = targetProject.project_name
    useTitle(pageTitle);
    return (
        <div className="max-w-7xl mx-auto mt-32 mb-32">
            <p className="text-white text-3xl font-bold mb-20">Project Name: <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                <TypeAnimation
                    sequence = {[
                        `${targetProject.project_name}`,
                        1000
                    ]}
                    wrapper="span"
                    speed={20}
                    style={{ display: 'inline-block' }}
                    repeat={0}
                ></TypeAnimation>
            </span></p>
            <h2 className="text-white text-3xl font-bold mb-3"
            data-aos="zoom-in-up" data-aos-duration="2000">Features:</h2>
            <div className="text-white text-2xl mb-4"
            data-aos="zoom-in-up" data-aos-duration="2000">
                {
                    targetProject.details.map((detail,index) => <div key={targetProject.id}>
                        <div className="mb-3 text-justify">{index+1}. {detail}</div>
                    </div>)
                }
            </div>
            <h2 className="text-white text-3xl font-bold mt-20 mb-3"
            data-aos="zoom-in-down" data-aos-duration="2000">Technologies:</h2>
            <div className="text-white text-2xl font-semibold mb-20 grid grid-cols-2 md:grid-cols-4"
            data-aos="zoom-in-down" data-aos-duration="2000">
                {
                    targetProject.technologies.map(technology => <p key={targetProject.id} className='text-justify'>{technology}</p>)
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
                <div>{targetProject.card_img && <img src={targetProject.card_img} alt="" data-aos="flip-left" data-aos-duration="2000"
                    className={`${targetProject.id === "110" ? 'rounded-2xl w-[573px] h-[1000px]' : 'rounded-2xl w-[600px] h-[400px]'}`} />}</div>
                <div>{targetProject.img1 && <img src={targetProject.img1} alt="" data-aos="flip-right" data-aos-duration="2000"
                    className={`${targetProject.id === "110" ? 'rounded-2xl w-[573px] h-[1000px]' : 'rounded-2xl w-[600px] h-[400px]'}`} />}</div>
                <div>{targetProject.img2 && <img src={targetProject.img2} alt="" data-aos="flip-up" data-aos-duration="2000"
                    className={`${targetProject.id === "110" ? 'rounded-2xl w-[573px] h-[1000px]' : 'rounded-2xl w-[600px] h-[400px]'}`} />}</div>
                <div>{targetProject.img3 && <img src={targetProject.img3} alt="" data-aos="flip-down" data-aos-duration="2000"
                    className={`${targetProject.id === "110" ? 'rounded-2xl w-[573px] h-[1000px]' : 'rounded-2xl w-[600px] h-[400px]'}`} />}</div>
                <div>{targetProject.img4 && <img src={targetProject.img4} alt="" data-aos="flip-left" data-aos-duration="2000"
                    className={`${targetProject.id === "110" ? 'rounded-2xl w-[573px] h-[1000px]' : 'rounded-2xl w-[600px] h-[400px]'}`} />}</div>
                <div>{targetProject.img5 && <img src={targetProject.img5} alt="" data-aos="flip-right" data-aos-duration="2000"
                    className={`${targetProject.id === "110" ? 'rounded-2xl w-[573px] h-[1000px]' : 'rounded-2xl w-[600px] h-[400px]'}`} />}</div>
             </div>
            <div data-aos="fade-up"
            data-aos-duration="2500">
                {targetProject.live_site && <p className="text-white text-xl">Live Site: <span className="text-orange-500 text-2xl"><a href={targetProject.live_site}>{targetProject.project_name}</a></span></p>}
                {targetProject.client_site && <p className="text-white text-xl">Client Site Link: <span className="text-orange-500 text-2xl"><a href={targetProject.client_site}>{targetProject.project_name}</a></span></p>}
                {targetProject.server_site && <p className="text-white text-xl">Server Site Link: <span className="text-orange-500 text-2xl"><a href={targetProject.server_site}>{targetProject.project_name}</a></span></p>}
            </div>
        </div>
    );
};

export default ProjectDetails;