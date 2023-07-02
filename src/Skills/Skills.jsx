import { useLoaderData } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import useTitle from "../Hooks/useTitle";

const Skills = () => {
    useTitle('Skills')
    const skills = useLoaderData();
    console.log(skills);
    return (
        <div className="max-w-7xl mx-auto mt-32 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Fade top left duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={skills[0].img} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">{skills[0].skill_name}</h2>
                        </div>
                    </div>
                </Fade>
                <Bounce top duration="2300">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={skills[1].img} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">{skills[1].skill_name}</h2>
                        </div>
                    </div>
                </Bounce>
                <Fade top right duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={skills[2].img} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">{skills[2].skill_name}</h2>
                        </div>
                    </div>
                </Fade>
                <Fade left duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={skills[3].img} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">{skills[3].skill_name}</h2>
                        </div>
                    </div>
                </Fade>
                <Zoom clear duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={skills[4].img} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">{skills[4].skill_name}</h2>
                        </div>
                    </div>
                </Zoom>
                <Fade right duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={skills[5].img} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">{skills[5].skill_name}</h2>
                        </div>
                    </div>
                </Fade>
                <Fade left duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={skills[6].img} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">{skills[6].skill_name}</h2>
                        </div>
                    </div>
                </Fade>
                <Zoom clear duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={skills[7].img} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">{skills[7].skill_name}</h2>
                        </div>
                    </div>
                </Zoom>
                <Fade right duration="2000">
                        <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={skills[8].img} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">{skills[8].skill_name}</h2>
                        </div>
                    </div>
                </Fade>
                <Fade bottom left duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={skills[9].img} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">{skills[9].skill_name}</h2>
                        </div>
                    </div>
                </Fade>
                <Bounce bottom duration="2300">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={skills[10].img} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">{skills[10].skill_name}</h2>
                        </div>
                    </div>
                </Bounce>
                <Fade bottom right>
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={skills[11].img} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">{skills[11].skill_name}</h2>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="mt-32 mb-32">
                <p className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-600 border border-sky-500
                font-bold text-2xl rounded-2xl p-3 text-center" data-aos="fade-down" data-aos-duration="1000">Interpersonal Skills</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-14">
                    <div className="text-white font-semibold text-2xl mt-10 p-3
                    flex flex-col items-center justify-center border border-teal-600 rounded-3xl"
                    data-aos="fade-left" data-aos-duration="1000">
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-400">TeamWork</p>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-400">Well Communication</p>
                    </div>
                    <div className="text-white font-semibold text-2xl mt-5 p-3
                    flex flex-col items-center justify-center border border-teal-600 rounded-3xl"
                    data-aos="fade-right" data-aos-duration="1000">
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-400">Explore New Technologies</p>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-400">Hard-wroking</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;