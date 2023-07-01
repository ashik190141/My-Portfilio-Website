import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Design from '../Design';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className='fixed w-full h-full z-[-1]'>
                <Design></Design>
            </div>
        </div>
    );
};

export default MainLayout;