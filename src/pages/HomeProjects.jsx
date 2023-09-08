import ShowProject from "../components/ShowProject";
import { NavLink } from "react-router-dom";


const HomeProjects = () => {
    return (
        <>
            <NavLink to = "/create"><button className="buttons">Subir Proyesto</button></NavLink>
            <h2>Lista de Proyectos:</h2>
            
            <div>
                <ShowProject />
            </div>
        </>
    )
}


export default HomeProjects;