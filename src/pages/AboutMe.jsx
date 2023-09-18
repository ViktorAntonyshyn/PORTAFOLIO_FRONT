import About from "../components/Atomos/About";
import Footer from "../components/Atomos/Footer";
import Navbar1 from "../components/Atomos/Navbar1";
import './AboutMe.css'


const AboutMe = () => {
    return (
        <> <div className="page-about">
            <div>
                <Navbar1 />
            </div>
            <div className="acordeon">
                <h4>About me:</h4>
                <About /><br />
                <a href="/public/CV Víktor Antonyshynf5v2.pdf" target="_blank">Open curriculum</a><br />
                <a href="/public/CV Víktor Antonyshynf5v2.pdf" download>Download curriculum</a><br />
            </div>
         <div>
                <Footer />
            </div>
        </div>


        </>

    );
}

export default AboutMe;
