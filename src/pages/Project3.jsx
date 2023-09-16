import { NavLink } from "react-router-dom";
import './Home.css'
import Footer from "../components/Atomos/Footer";
import Navbar1 from "../components/Atomos/Navbar1";
import ShowProject3 from "../components/ShowProject3";

const Project3 = () => {
    return (
        <>
            <div>
                <Navbar1/>
            </div>

            <div className="page">
                <NavLink to="/projects"><button className="buttons"  type="button-create" >Back to progects</button></NavLink>
                <h2>Project 3:</h2>

                <div className="project-cards">
                    <ShowProject3 />
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </>
    )
}


export default Project3;