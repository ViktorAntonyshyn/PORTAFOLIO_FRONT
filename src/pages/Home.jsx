import ShowProject from "../components/ShowProject";
import { NavLink } from "react-router-dom";
import './Home.css'
import Footer from "../components/Atomos/Footer";
import Navbar1 from "../components/Atomos/Navbar1";


const Home = () => {
    return (
        <>
            <div>
                <Navbar1 />
            </div>

            <div className="page">
                <div className="project-list">
                    <h2>Project List:</h2>
                </div>
                <div className="project-cards">
                    <ShowProject />
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </>
    )
}


export default Home;