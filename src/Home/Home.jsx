import useTitle from '../Hooks/useTitle';
import Myself from './MySelf/Myself';
import Education from './Education/Education';


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Myself></Myself>
            <Education></Education>
        </div>
    );
};

export default Home;