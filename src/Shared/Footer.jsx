import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="mt-10">
        <footer className="footer footer-center p-10 bg-slate-950 text-primary-content">
            <aside>
                <p className="font-bold italic">
                    `Work hard in silence,let your success be your noise` <br />Frank Ocean
                </p>
                <p>Copyright © 2023 - All right reserved by <br/> Ahsan Mahmud Ashik</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col text-pink-600 text-3xl gap-4">
                    <a href="https://www.facebook.com/ahsanmahmud.ashik"><FaFacebook></FaFacebook></a>
                     <a href="https://github.com/ashik190141"><FaGithub></FaGithub></a>
                     <a href="https://www.linkedin.com/in/ashan-mahmud-ashik-33715a22a/"><FaLinkedin></FaLinkedin></a>
                </div>
            </nav>
        </footer>
    </div>
    );
};

export default Footer;