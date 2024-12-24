import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import LoadingPage from "../../Layout/LoadingPage";
import { CreateUser } from '../../utils/CreateUser';


const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleRegister = (e) => {
        setShow(true);
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const type = "user"

        if (password.length < 6) {
            Swal.fire({
            title: 'Password must be six characters',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
            })
            return;
        }

        if (!/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[A-Z])/.test(password)) {
            Swal.fire({
            title: 'Password must an upper latter and one special character',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
            })
            return;
        }

        //create User

        // eslint-disable-next-line no-undef
        createUser(email,password)
            .then(async result => {
            localStorage.setItem("key", email);
            localStorage.setItem("type", "user");
            const userInfo = {name,email,password,type}
            const res = await CreateUser(userInfo);
            updateUserData(result.user, name);
            setShow(false)
            if (res.result) {
                Swal.fire({
                  title: "Registration Successful",
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
                navigate("/");
            }
        })
        .catch(error =>{
            console.error(error)
        })
    }
    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,photoURL: photo,
        })
            .then(() => {
                console.log('User Profile Updated');
            })
            .catch(error => {
                console.log(error);
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
                    <h2 className="pb-8 text-center text-3xl font-bold text-[#26292c]">Registration Here</h2>
                    <form onSubmit={handleRegister} className="flex  w-full flex-col items-center justify-center gap-4">
                        <input className="w-[80%] rounded-lg border border-[#26292c] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#26292c]/50 md:w-[60%]" type="text" name="name" placeholder="Name"/>

                        <input className="w-[80%] rounded-lg border border-[#26292c] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#26292c]/50 md:w-[60%]"  type="email" name="email" placeholder="Email" />

                        <input className="w-[80%] rounded-lg border border-[#26292c] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#26292c]/50 md:w-[60%]" type="password" name="password" placeholder="Password"/>

                        <p className="text-[14px] text-gray-400">Already have An account ? <Link to="/logIn" className="text-[#26292c] ">Log In</Link></p>

                        {!show ? <input className="btn w-[80%] rounded-lg bg-[#26292c] px-6 py-2 font-medium text-white md:w-[60%]" type="submit" />: <LoadingPage></LoadingPage>}
                    </form>
                    {/* divider  */}
                    <div className="my-8 flex items-center px-8">
                        <hr className="flex-1" />
                        <div className="mx-4 text-gray-400">OR</div>
                        <hr className="flex-1" />
                    </div>
                </div>
            </div>
        </div>


    );
};

export default SignUp;