/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";


const LogIn = () => {
    const { signIn, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const loginHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                form.reset();
                localStorage.setItem("key", email);
                Swal.fire({
                    title: 'Login Successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    title: 'Email or Password do not matched',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                console.log(error.message);
            })
    }

    const googleLoginHandler = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="flex h-screen items-center justify-center bg-[#8EA7E9]/20 p-6 md:p-0">
            <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[60%] lg:h-[80%]">
                {/* register design side  */}
                <div className="relative hidden h-full items-center justify-center bg-[#26292c] md:flex md:w-[60%] lg:w-[40%]">
                    <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br  from-white via-[#636364] to-[#191a1e]"></div>
                    <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br  from-white via-[#636364] to-[#191a1e]"></div>
                    <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white  via-[#636364] to-[#191a1e] transition-all"></div>
                    <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white  via-[#636364] to-[#191a1e]"></div>
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-medium text-white/80 ">Welcome Back</h2>
                        <p className="animate-pulse text-sm text-white/60">Please Enter You Information</p>
                    </div>
                </div>
                {/* input side  */}
                <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
                    <h2 className="pb-8 text-center text-3xl font-bold text-[#26292c]">Login Here</h2>
                    <form onSubmit={loginHandler} className="flex  w-full flex-col items-center justify-center gap-4">
                        <input className="w-[80%] rounded-lg border border-[#26292c] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#26292c]/50 md:w-[60%]" type="email" placeholder="Email" name="email"/>
                        <input className="w-[80%] rounded-lg border border-[#26292c] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#26292c]/50 md:w-[60%]" type="password" placeholder="Password" name="password"/>
                        <p className="text-[14px] text-gray-400">Do not have an account ? <Link to="/signUp" className="text-[#26292c] ">Create one</Link></p>

                        <input className="btn w-[80%] rounded-lg bg-[#26292c] px-6 py-2 font-medium text-white md:w-[60%]" type="submit" />
                    </form>
                    {/* divider  */}
                    <div className="my-8 flex items-center px-8">
                        <hr className="flex-1" />
                        <div className="mx-4 text-gray-400">OR</div>
                        <hr className="flex-1" />
                    </div>
                    {/* sign with google */}
                    <div  onClick={googleLoginHandler} className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
                        <div className="flex h-full w-[50%] items-center bg-[#26292c] pl-4 text-sm text-white">Sign With</div>
                        <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#26292c] group-hover:hidden"></span>
                        <span className="pr-4 text-4xl font-bold text-[#26292c]">G+</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;