import { NavLink } from "react-router-dom";
import './Home.css'
import Footer from "../components/Atomos/Footer";
import Navbar1 from "../components/Atomos/Navbar1";
import ShowProject1 from "../components/ShowProject1";


const Project1 = () => {
    return (
        <>
            <div>
                <Navbar1/>
            </div>

            <div className="page">
                <NavLink to="/projects"><button className="buttons"  type="button-create" >Back to progects</button></NavLink>
                <h2>Project 1:</h2>

                <div className="project-cards">
                    <ShowProject1 />
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </>
    )
}


export default Project1;