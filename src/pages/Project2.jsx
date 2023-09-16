import { NavLink } from "react-router-dom";
import './Home.css'
import Footer from "../components/Atomos/Footer";
import Navbar1 from "../components/Atomos/Navbar1";
import ShowProject2 from "../components/ShowProject2";

const Project2 = () => {
    return (
        <>
            <div>
                <Navbar1/>
            </div>

            <div className="page">
                <NavLink to="/projects"><button className="buttons"  type="button-create" >Back to progects</button></NavLink>
                <h2>Project 2:</h2>

                <div className="project-cards">
                    <ShowProject2 />
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </>
    )
}


export default Project2;