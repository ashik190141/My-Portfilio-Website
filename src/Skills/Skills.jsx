import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import useTitle from "../Hooks/useTitle";
import javascript from "../../public/skills/bootstrap.jpg";
import nodejs from "../../public/skills/nodejs.jpg";
import mongodb from "../../public/skills/mongodb.jpg";
import react from "../../public/skills/react.jpg";
import firebase from "../../public/skills/firebase.jpg";
import python from "../../public/skills/python.jpg";
import c from "../../public/skills/c.jpg";
import java from "../../public/skills/java.jpg";
import bootstrap from "../../public/skills/bootstrap.jpg";
import tailwind from "../../public/skills/tailwind.jpg";
import html from "../../public/skills/html.jpg";
import css from "../../public/skills/css.jpg";
import typeScript from "../../public/skills/TypeScript.png"
import mongoose from "../../public/skills/mongoose.jfif"
import next from "../../public/skills/Next.jpg"
import redux from "../../public/skills/redux.jpg"

const Skills = () => {
    useTitle('Skills')
    return (
        <div className="max-w-7xl mx-auto mt-32 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Fade top left duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={javascript} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Javascript</h2>
                        </div>
                    </div>
                </Fade>
                <Bounce top duration="2300">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={nodejs} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Node.js</h2>
                        </div>
                    </div>
                </Bounce>
                <Fade top right duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={mongodb} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">MongoDB</h2>
                        </div>
                    </div>
                </Fade>
                <Fade left duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={react} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">React</h2>
                        </div>
                    </div>
                </Fade>
                <Zoom clear duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={firebase} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Firebase</h2>
                        </div>
                    </div>
                </Zoom>
                <Fade right duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={python} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Python</h2>
                        </div>
                    </div>
                </Fade>
                <Fade left duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={c} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">C/C++</h2>
                        </div>
                    </div>
                </Fade>
                <Zoom clear duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={java} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Java</h2>
                        </div>
                    </div>
                </Zoom>
                <Fade right duration="2000">
                        <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={bootstrap} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Bootstrap</h2>
                        </div>
                    </div>
                </Fade>
                <Fade bottom left duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={tailwind} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Tailwind</h2>
                        </div>
                    </div>
                </Fade>
                <Bounce bottom duration="2300">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={html} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">HTML</h2>
                        </div>
                    </div>
                </Bounce>
                <Fade bottom right>
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={css} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">CSS</h2>
                        </div>
                    </div>
                </Fade>
               {/* //New */}
                <Fade bottom left duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={redux} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Redux</h2>
                        </div>
                    </div>
                </Fade>

                <Zoom clear duration="2000">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={mongoose} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Mongoose</h2>
                        </div>
                    </div>
                </Zoom>

                <Fade bottom right>
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={typeScript} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">TypeScript</h2>
                        </div>
                    </div>
                </Fade>

                <Bounce bottom duration="2300">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={next} alt=""/></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold">Next</h2>
                        </div>
                    </div>
                </Bounce>
                
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