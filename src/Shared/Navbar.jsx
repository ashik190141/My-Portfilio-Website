import { Link, NavLink, useNavigate } from "react-router-dom";
import webIcon from '../assets/Icon_Prot.jpg';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUser, FaUserMinus } from "react-icons/fa";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [userType, setUserType] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/user-info/${user?.email}`)
            .then(res => res.json())
            .then(data => setUserType(data));
    },[])
    const navigate = useNavigate();


    const logoutHandler = () => {
        logOut()
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            })
    }
    // console.log(user);

    const navOptions = (
      <>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 uppercase">
          <Link to="/">Home</Link>
        </li>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  uppercase">
          <Link to="/about">About Me</Link>
        </li>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  uppercase">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  uppercase">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  uppercase">
          <Link to="/contact">Contact Me</Link>
        </li>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  uppercase">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  uppercase">
          <Link to="/dashboard/add-skill">Dashboard</Link>
        </li>
      </>
    );

    const navEnd = <>
        {
            user ? (<div className=''>
                <div className="text-pink-600 text-xl font-bold group flex  cursor-pointer flex-col"><FaUserMinus
                    onClick={logoutHandler}
                    className=" text-2xl hover:text-slate-800"
                ></FaUserMinus></div>
            </div>) : (

                <li><NavLink to='/logIn' className=" text-pink-600 text-xl font-bold group flex  cursor-pointer flex-col">
                    {" "}
                    <FaUser /><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span></NavLink></li>
            )
        }
    </>

    const navDrop = (
      <>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 uppercase">
          <Link to="/">Home</Link>
        </li>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  uppercase">
          <Link to="/about">About Me</Link>
        </li>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  uppercase">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  uppercase">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  uppercase">
          <Link to="/contact">Contact Me</Link>
        </li>
        <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  uppercase">
          <Link to="/blog">Blog</Link>
        </li>
        {userType == "admin" && (
          <li className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  uppercase">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}

        {user ? (
          <div className="">
            <div className="text-pink-600 text-xl font-bold group flex  cursor-pointer flex-col">
              <FaUserMinus
                onClick={logoutHandler}
                className=" text-2xl hover:text-slate-800"
              ></FaUserMinus>
            </div>
          </div>
        ) : (
          <li>
            <NavLink
              to="/logIn"
              className=" text-pink-600 text-xl font-bold group flex  cursor-pointer flex-col"
            >
              {" "}
              <FaUser />
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
        )}
      </>
    );



    return (
      <div className="navbar h-20 md:mt-8">
        <div className="block md:hidden navbar-start">
          <div className="flex items-center justify-between">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 18 18"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="z-10 bg-white menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
              >
                {navDrop}
              </ul>
            </div>
            <div className="flex  items-center gap-2 md:gap-4 ">
              <div className="">
                <img
                  src={webIcon}
                  alt=""
                  className="w-[40px] md:w-[80px]  rounded-3xl"
                />
              </div>
              <div>
                <p className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold">
                  Ashik
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block navbar-start ml-32">
          <div className="flex  items-center gap-2 md:gap-4 ">
            <div className="">
              <img
                src={webIcon}
                alt=""
                className="w-[40px] md:w-[80px]  rounded-3xl"
              />
            </div>
            <div>
              <p className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold">
                Ashik
              </p>
            </div>
          </div>
        </div>

        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1 hidden md:flex">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end md:gap-4 mr-32">
          <ul className="menu menu-horizontal px-1 hidden md:flex">{navEnd}</ul>
        </div>
      </div>
    );
};

export default Navbar;