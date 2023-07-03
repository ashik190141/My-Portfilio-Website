import { TypeAnimation } from 'react-type-animation';
import { FaDownload } from "react-icons/fa";
import img from '../../assets/ashik-removebg-preview.png'

const Myself = () => {
    return (
        <div className="max-w-7xl mx-auto mt-20">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center'>
                <div data-aos="zoom-in-up" data-aos-duration="1000">
                    <img src={img} alt="" className='border border-orange-500 rounded-3xl'/>
                </div>
                <div className='p-2 md:p-0'>
                    <h2 className="text-white text-2xl font-bold mb-4">Hi, I am</h2>
                    <h2 className="text-3xl md:text-6xl mb-6 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-900">Ahsan Mahmud Ashik</h2>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'MERN Stack Developer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Specialize With React.js',
                            1000,
                            'Problem Solving',
                            1000,
                            'Competitive Programmer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{display: 'inline-block', fontFamily: 'fantasy' }}
                        repeat={Infinity}
                        className="text-2xl md:text-5xl text-justify mb-14 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                    />
                    <p className='text-white text-xl text-justify font-sans mb-10'>
                        I am a highly motivated, hard worker and progress-focused web developer. I am try to learn and explore new technologies all time. Skilled in creating responsive user interfaces and building RESTful APIs. 
                    </p>
                    <div>
                        <a href="Resume_of_Ahsan_Mahmud.pdf" download="Resume_of_Ahsan_Mahmud.pdf">
                            <button className='flex gap-5 items-center font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-teal-600 border border-sky-500 rounded-2xl p-3'>
                                Download Resume<FaDownload className='text-orange-500'></FaDownload>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myself;