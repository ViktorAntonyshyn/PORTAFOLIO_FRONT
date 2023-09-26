import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './ShowProjectManager.css'

const url = "https://portafolio-production-6a6e.up.railway.app/api/v1/projects";
const ShowProjectManager = () => {
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
        navigate('/projects/manager');
    };

    return (
        <>
            {project.map(project => (
                <div key={project.id} className="all-container-manager">
                    <div className="container-project" >
                        <br /><p> Project ID <span className='name-Project'>{project.id}</span> </p>
                        <p> Project name: <span className='name-Project'>{project.name}</span></p>
                        <p> Description: <span className='name-Project'>{project.description}</span> </p>
                        <img className='pic-project' src={project.picture} alt={project.name}></img><br />
                        <a href={project.link1} target="_blank" rel="noopener noreferrer">Go to GitHub repository BACKEND</a>
                        <a href={project.link2} target="_blank" rel="noopener noreferrer">Go to GitHub repository FRONTEND</a>
                    </div>
                    <div className="container-buttones-manager">
                        <NavLink to={`/projects/edit/${project.id}`}><button className="buttons-manager">Edit project</button></NavLink>
                        <button className="buttons-manager" onClick={() => handleDelete(project.id)}>Delete project</button>
                    </div>
                </div>
            ))}
        </>
    )

}

export default ShowProjectManager;