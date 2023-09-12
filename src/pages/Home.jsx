import ShowProject from "../components/ShowProject";
import { NavLink } from "react-router-dom";
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="page">
                <NavLink to="/create"><button className="buttons">Subir Proyesto</button></NavLink>
                <h2>Lista de Proyectos:</h2>

                <div>
                    <ShowProject />
                </div>
            </div>

        </>
    )
}


export default Home;