import { NavLink } from "react-router-dom";
import './Home.css'
import Footer from "../components/Atomos/Footer";
import Navbar1 from "../components/Atomos/Navbar1";
import ShowProjectManager from "../components/ShowProjectManager";


const ProjectManager = () => {
    return (
        <>
            <div>
                <Navbar1/>
            </div>

            <div className="page">
                <NavLink to="/projects/create"><button className="buttons"  type="button-create" >Add new project</button></NavLink>
                <h2>Manage to projects:</h2>
                <div className="project-cards">
                    <ShowProjectManager />
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </>
    )
}


export default ProjectManager;