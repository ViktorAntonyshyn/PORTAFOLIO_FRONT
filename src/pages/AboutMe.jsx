import About from "../components/Atomos/About";
import Footer from "../components/Atomos/Footer";
import Navbar1 from "../components/Atomos/Navbar1";
import './AboutMe.css'


const AboutMe = () => {
    return (
        <>
            <div>
                <Navbar1 />
            </div>
            <div className="acordeon">
                <h3>About me:</h3>
                <About />
            </div>
            <div>
                <Footer/>
            </div>

        </>

    );
}

export default AboutMe;
