import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './ShowProject.css'

const url = "http://localhost:8080/api/v1/projects";

const ShowProject1 = () => {
    const [project, setProject] = useState([]);
    const idToShow = 2; // ID for show project
    
    useEffect(() => {
        getAllProgects(idToShow);
    }, []);
    
    const getAllProgects = async (id) => {
        const response = await axios.get(`${url}/${id}`);
        let data = response.data;
        console.log(data);
        setProject([data]);
    }

    const navigate = useNavigate();

    const handleDelete = async (id) => {
        await axios.delete(`${url}/${id}`);
        setProject([]);
        alert(`ATTENTION! DELETING PROJECT ID#${id}`);
        navigate('/projects');
    };

    return (
        <>
            {project.map(project => (
                <div key={project.id} className="all-container">
                    <div className="container-project">
                        {/* <p> Project <span className='name-Project'>{project.id}</span> </p> */}
                        <br /><p> Project name: <span className='name-Project'>{project.name}</span></p>
                        <p> Description: <span className='name-Project'>{project.description}</span> </p>
                        <img className='pic-project' src={project.picture} alt={project.name}></img>
                        <a href={project.link1} target="_blank" rel="noopener noreferrer">Go to GitHub repository {project.link1}</a>
                        <a href={project.link2} target="_blank" rel="noopener noreferrer">Go to GitHub repository {project.link2}</a>
                    </div>
                    <div className="container-buttones">
                        <NavLink to={`/projects/edit/${project.id}`}><button className="buttons">Edit project</button></NavLink>
                        <button className="buttons" onClick={() => handleDelete(project.id)}>Delete project</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ShowProject1;