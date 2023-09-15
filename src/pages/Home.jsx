import ShowProject from "../components/ShowProject";
import { NavLink } from "react-router-dom";
import './Home.css'
import Header from "../components/Atomos/Header";
import Footer from "../components/Atomos/Footer";
import Lenguages from "../components/Atomos/Languages";
import Navbar from "../components/Atomos/Navbar";
import Navbar1 from "../components/Atomos/Navbar1";


const Home = () => {
    return (
        <>
            <div>
                <Navbar1/>
            </div>

            <div className="page">
                <NavLink to="/projects/create"><button className="buttons">Subir Proyesto</button></NavLink>
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