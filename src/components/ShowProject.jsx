import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
        navigate('/projects');
    };

    return (
        <>
            {project.map(project => (
                <div key={project.id} className="all-container">
                    <div className="container-project" >
                        {/* <p> Project  <span className='name-Project'>{project.id}</span> </p> */}
                        <br /><p> Project name: <span className='name-Project'>{project.name}</span></p>
                        <p> Description: <span className='name-Project'>{project.description}</span> </p>
                        <img className='pic-project' src={project.picture} alt={project.name}></img><br />
                        <a href={project.link1} target="_blank" rel="noopener noreferrer">Go to GitHub repository BACKEND</a>
                        <a href={project.link2} target="_blank" rel="noopener noreferrer">Go to GitHub repository FRONTEND</a><br />
                    </div>

                </div>
            ))}
        </>
    )

}

export default ShowProject 