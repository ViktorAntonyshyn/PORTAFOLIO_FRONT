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
    }, []);
    
    
    const getAllProgects = async () => {
        const response = await axios.get(url)
        let data = response.data
        console.log(data)
        setProject(data)
    }
    const navigate = useNavigate();
    const handleDelete = async (id) => {
        await axios.delete(`${url}/${id}`);
        setProject((prevProject) => prevProject.filter((project) => project.id !== id));
        alert(`ATENTION! DELETING PROJECT ID#${id}`);
        navigate('/');
    };

    return (
        <>
            {project.map(project => (
                <div key={project.id} className="all-container">
                    <div className="container-project" >
                        <p> Proyecto  <span className='name-Project'>{project.id}</span> </p>
                        <p> Nombre: <span className='name-Project'>{project.name}</span></p>
                        <p> Descripcion: <span className='name-Project'>{project.description}</span> </p>
                        <img className='pic-project' src={project.picture} alt={project.name}></img>
                        <a href={project.link1} target="_blank" rel="noopener noreferrer">Ir a GitHub repositorio {project.link1}</a>
                        <a href={project.link2} target="_blank" rel="noopener noreferrer">Ir a GitHub repositorio {project.link2}</a>
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