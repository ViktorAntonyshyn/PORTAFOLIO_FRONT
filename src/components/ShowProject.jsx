import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './ShowProject.css'

const url = "http://localhost:8080/api/v1/projects";
const ShowProject = () => {
    const [project, setProject] = useState([])
    useEffect(() => {
        getAllProgects()
    }, [])

    const getAllProgects = async () => {
        const response = await axios.get(url)
        let data = response.data
        console.log(data)
        setProject(data)
    }

    const handleDelete = async (id) => {
        await axios.delete(`${url}/${id}`);
        setProject((prevProject) => prevProject.filter((cita) => project.id !== id));
        alert(`ATENTION! DELETING PROJECT ID#${id}`);
    };

    return (
        <>
            {project.map(project => (
                <div key={project.id} className="all-container">
                    <div className="contenedor-project" >
                        <p> ID#{project.id}</p>
                        <p> {project.name}</p>
                        <p> {project.description} </p>
                        <p> {project.picture} </p>
                        <p> {project.link1}</p>
                        <p> {project.link2}</p>
                    </div>
                    <div className="container-buttones">
                        <NavLink to={`/edit/${project.id}`}><button className="buttons">Editar project</button></NavLink>
                        <button className="buttons" onClick={() => handleDelete(project.id)}>Eliminar project</button>
                    </div>
                </div>
            ))}
        </>
    )

}





export default ShowProject 