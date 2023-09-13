import ShowProject from "../components/ShowProject";
import { NavLink } from "react-router-dom";
import './Home.css'
import Header from "../components/Atomos/Header";
import Footer from "../components/Atomos/Footer";
import Lenguages from "../components/Atomos/Languages";

const Home = () => {
    return (
        <>
            <div>
                <Header />
            </div>

            <div className="page">
                <NavLink to="/create"><button className="buttons">Subir Proyesto</button></NavLink>
                <h2>Lista de Proyectos:</h2>

                <div>
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