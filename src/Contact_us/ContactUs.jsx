import Bounce from 'react-reveal/Bounce';
import location from '../../public/contact/location-removebg-preview.png';
import phone from '../../public/contact/phone-removebg-preview.png';
import facebook from '../../public/contact/facebook.jpg';
import linkedin from '../../public/contact/linkedin.png';
import github from '../../public/contact/github.jpg';
import whatsApp from '../../public/contact/whatsapp-removebg-preview.png';
import telegram from '../../public/contact/Telegram-removebg-preview.png';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Fade from 'react-reveal/Fade';
import useTitle from '../Hooks/useTitle';
import Swal from 'sweetalert2';

const ContactUs = () => {
    useTitle('Contact')
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_t6a2iuh', 'template_eqz8nrg', form.current, '2qrvMBj-vyA-16egD')
            .then((result) => {
                Swal.fire({
                title: 'Successfully Send Your Email',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
                })
                console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='max-w-7xl mx-auto my-20'>
            <Bounce top>
                <h2 className="text-center font-extrabold font-serif mb-5
                    text-3xl md:text-5xl text-transparent 
                    bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"
                >
                    Contact Me
                </h2>
            </Bounce>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                <Fade top left>
                    <div className=''>
                        <div className='flex items-center gap-8 mb-3'>
                            <img src={location} alt="" className='w-[45px] btn btn-circle bg-transparent border-none'/>
                            <p className="text-white text-3xl font-serif font-medium">Satkhira, Bangladesh</p>
                        </div>
                        <div className='flex items-center gap-8 mb-3'>
                            <img src={phone} alt="" className='w-[45px] btn btn-circle bg-transparent border-none'/>
                            <p className="text-white text-3xl font-serif font-medium">+880 1744-136454</p>
                        </div>
                        <div className='flex items-center gap-8 mb-3'>
                            <img src={whatsApp} alt="" className='w-[45px] btn btn-circle bg-transparent border-none'/>
                            <p className="text-white text-3xl font-serif font-medium">+880 1744-136454</p>
                        </div>
                        <div className='flex items-center gap-8 mb-3'>
                            <img src={telegram} alt="" className='w-[45px] btn btn-circle bg-transparent border-none'/>
                            <p className="text-white text-3xl font-serif font-medium">+880 1744-136454</p>
                        </div>
                        <div className='flex gap-6 mt-10'>
                            <a className='btn btn-circle bg-transparent border-none' href="https://www.facebook.com/ahsanmahmud.ashik"><img src={facebook} alt="" className='w-[40px] h-[40px] rounded-full' /></a>
                            <a className='btn btn-circle bg-transparent border-none' href="https://www.linkedin.com/in/ashan-mahmud-ashik-33715a22a/"><img src={linkedin} alt="" className='w-[40px] h-[40px] rounded-full' /></a>
                            <a className='btn btn-circle bg-transparent border-none' href="https://github.com/ashik190141"><img src={github} alt="" className='w-[40px] h-[40px] rounded-full'/></a>
                        </div>
                    </div>
                </Fade>
                <Fade top right>
                    <div>
                        <h2 className='text-white text-left font-bold text-3xl font-serif mb-8 mt-10'>Send Email</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <div>
                                <div className="form-control w-full mb-6">
                                    <input type="text" name="user_name"
                                        placeholder="Enter Your Name" className="input input-bordered font-serif rounded-sm text-white text-xl
                                        bg-gradient-to-r from-indigo-500 from-10% to-sky-500 to-90%" />
                                </div>
                                <div className="form-control w-full mb-6">
                                    <input type="email" name="user_email"
                                        placeholder="Enter Your Email Address" className="input input-bordered rounded-sm text-white text-xl font-serif
                                        bg-gradient-to-r from-indigo-500 from-10% to-sky-500 to-90%" />
                                </div>
                                <div className="form-control w-full mb-6">
                                    <textarea type="text" name="message"
                                        placeholder="Write Your Message" className="input input-bordered rounded-sm h-[150px] text-white font-serif
                                        bg-gradient-to-r from-indigo-500 from-10% to-sky-500 to-90% text-xl" />
                                </div>
                                <div>
                                    <input type="submit" value="Send" className='btn border-none rounded-sm font-serif text-black text-xl bg-orange-500'/>
                                </div>
                            </div>
                        </form>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default ContactUs;