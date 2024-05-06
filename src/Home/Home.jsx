import useTitle from '../Hooks/useTitle';
import Myself from './MySelf/Myself';
import Education from './Education/Education';
import HomeProjects from '../Projects/HomeProjects';



const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Myself></Myself>
            <Education></Education>
            <HomeProjects></HomeProjects>
           
        </div>
    );
};

export default Home;