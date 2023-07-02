import { Link } from "react-router-dom";
import webIcon from '../assets/Icon_Prot.jpg';

const Navbar = () => {

    const navOptions = <>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold uppercase"><Link to="/">Home</Link></li>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold uppercase"><Link to="/about">About Me</Link></li>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold uppercase"><Link to="/skills">Skills</Link></li>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold uppercase"><Link to="/projects">Projects</Link></li>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold uppercase"><Link to='/contact'>Contact Me</Link></li>
    </>

    return (
        <div className="navbar text-white h-20 md:mt-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                fill="none" viewBox="0 0 18 18" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="bg-white menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <div className="flex items-center gap-4 md:gap-8 md:ml-5">
                    <div className="w-10">
                        <img src={webIcon} alt="" className="w-[80px] md:w-[80px] md:ml-40 rounded-3xl"/>
                    </div>
                    <div>
                        <p className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold">Ashik</p>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                
            </div>
            <div className="navbar-end md:gap-4 md:mr-40">
                <ul className="menu menu-horizontal px-1 hidden md:flex">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;