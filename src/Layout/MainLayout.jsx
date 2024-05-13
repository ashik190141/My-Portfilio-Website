import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Design from '../Design';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className='fixed w-full h-full z-[-1]'>
                <Design></Design>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;