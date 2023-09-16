import ShowProject from "../components/ShowProject";
import { NavLink } from "react-router-dom";
import './Home.css'
import Footer from "../components/Atomos/Footer";
import Navbar1 from "../components/Atomos/Navbar1";

/* import IndividualIntervalsExample from "../components/Atomos/IndividualIntervalsExample" */






const Home = () => {
    return (
        <>
            <div>
                <Navbar1/>
            </div>
           {/*  <div>
                <IndividualIntervalsExample/>
            </div> */}

            <div className="page">
                <NavLink to="/projects/create"><button className="buttons"  type="button-create" >Subir Proyesto</button></NavLink>
                <h2>Lista de Proyectos:</h2>

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