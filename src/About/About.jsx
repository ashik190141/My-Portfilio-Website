import useTitle from "../Hooks/useTitle";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';
import img1 from '../assets/app_development-removebg-preview.png';
import img2 from '../assets/web_development-removebg-preview.png';
import img3 from '../assets/python-removebg-preview.png';
import img4 from '../assets/codeforce-removebg-preview.png';
import img5 from '../assets/codechef-removebg-preview.png';
import img6 from '../assets/leetcode-removebg-preview.png';

const About = () => {
    useTitle('About');
    return (
        <div className="max-w-7xl mx-auto mt-32">
            <Bounce top>
                <h2 className="text-center font-extrabold mb-14
                    text-3xl md:text-5xl text-transparent 
                    bg-clip-text bg-gradient-to-r from-sky-300 to-yellow-500"
                >
                    Personal Information
                </h2>
            </Bounce>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <Fade left>
                    <div className="text-white text-xl md:text-2xl font-bold">
                        <div className="grid grid-cols-2 mb-3">
                            <p className="ml-14">Name:</p>
                            <p>Ahsan Mahmud Ashik</p>
                        </div>
                        <div className="grid grid-cols-2 mb-3">
                            <p className="ml-14">Age:</p>
                            <p>22</p>
                        </div>
                        <div className="grid grid-cols-2 mb-3">
                            <p className="ml-14">Phone Number:</p>
                            <p>+880 1744-136454</p>
                        </div>
                        <div className="grid grid-cols-2 mb-3">
                            <p className="ml-14">Address:</p>
                            <p>Satkhira, Bangladesh</p>
                        </div>
                        <div className="grid grid-cols-2 mb-3">
                            <p className="ml-14">Language:</p>
                            <p>Bangla and English</p>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="text-white text-xl md:text-2xl font-bold">
                        <div className="grid grid-cols-2 mb-3">
                            <p className="ml-14">Nationality:</p>
                            <p>Bangladeshi</p>
                        </div>
                        <div className="grid grid-cols-2 mb-3">
                            <p className="ml-14">National ID:</p>
                            <p>7363422069</p>
                        </div>
                        <div className="grid grid-cols-2 mb-3">
                            <p className="ml-14">Email:</p>
                            <p>ashanmahmudashik@gmail.com</p>
                        </div>
                        <div className="grid grid-cols-2 mb-3">
                            <p className="ml-14">Github:</p>
                            <p><a href="https://github.com/ashik190141" className="text-blue-500">Ahsan Mahmud</a></p>
                        </div>
                        <div className="grid grid-cols-2 mb-3">
                            <p className="ml-14">Linkedin:</p>
                            <p><a href="https://www.linkedin.com/in/ashan-mahmud-ashik-33715a22a/" className="text-blue-500">Ahsan Mahmud</a></p>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-20 mt-32">
                <Rotate bottom left>
                    <div className="flex w-[350px] gap-10 items-center border border-orange-400 rounded-3xl p-5">
                        <div>
                            <img src={img2} alt="" className="w-[40px] h-[40px] mb-1"/>
                            <img src={img3} alt="" className="w-[40px] h-[40px] mb-1"/>
                            <img src={img1} alt="" className="w-[40px] h-[40px]"/>
                        </div>
                        <div>
                            <p className="text-transparent bg-clip-text font-extrabold text-7xl 
                            bg-gradient-to-r from-purple-400 to-pink-600">20+</p>
                            <p className="text-white text-2xl mt-2 uppercase">Projects</p>
                        </div>
                    </div>
                </Rotate>
                <Rotate bottom right>
                    <div className="flex w-[350px] gap-10 items-center border border-orange-400 rounded-3xl p-5">
                        <div>
                            <img src={img4} alt="" className="w-[40px] h-[40px] mb-1"/>
                            <img src={img5} alt="" className="w-[40px] h-[40px] mb-1"/>
                            <img src={img6} alt="" className="w-[40px] h-[40px]"/>
                        </div>
                        <div>
                            <p className="text-transparent bg-clip-text font-extrabold text-7xl 
                            bg-gradient-to-r from-purple-400 to-pink-600">600+</p>
                            <p className="text-white text-2xl mt-2 uppercase">problems Solve</p>
                        </div>
                    </div>
                </Rotate>
            </div>
        </div>
    );
};

export default About;