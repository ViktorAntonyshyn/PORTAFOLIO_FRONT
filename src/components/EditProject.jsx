import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './EditProject.css'

// Codigo abajo es cuando back-end modificado para subir binare archivo
const url = "http://localhost:8080/api/v1/projects";

const EditProject = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [picture, setPicture] = useState(null);
    const [link1, setLink1] = useState('');
    const [link2, setLink2] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    const cancel = () => {
        navigate("/projects");
    };

    const update = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("picture", picture);
        formData.append("link1", link1);
        formData.append("link2", link2);

        await axios.put(`${url}/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        navigate("/projects");
    };

    useEffect(() => {
        const getProjectById = async () => {
            const response = await axios.get(`${url}/${id}`);
            const data = response.data;
            console.log(data);
            setName(data.name);
            setDescription(data.description);
            setLink1(data.link1);
            setLink2(data.link2);
        }
        getProjectById();
    }, [id]);

    return (
        <div className="all-container-edit">
            <div className="container-edit">
                <h3>Modify project ID: {id}</h3>
                <form onSubmit={update}>
                    <div className="form">
                        <label htmlFor="name">Project name --------</label>
                        <input type="text" id="hover" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form">
                        <label htmlFor="description">Description: ---------</label>
                        <input type="text" id="hover" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="form">
                        <label htmlFor="picture">Picture --------------</label>
                        <input type="file" onChange={(e) => setPicture(e.target.files[0])} accept="image/*" />
                    </div>
                    <div className="form">
                        <label htmlFor="link1">Link GitHub: --------</label>
                        <input type="text" id="hover" value={link1} onChange={(e) => setLink1(e.target.value)} />
                    </div>
                    <div className="form">
                        <label htmlFor="link2">Other link: ----------</label>
                        <input type="text" id="hover" value={link2} onChange={(e) => setLink2(e.target.value)} />
                    </div>
                    <div className="container-buttones ">
                        <button className="buttons">Confirm</button>
                        <button className="buttons" onClick={cancel}>Cancel</button>
                    </div>


                </form>
            </div>
        </div>
    );
}

export default EditProject;










// codigo para subir un imagem como texto enlace (no arcivo) 
/* const url = "http://localhost:8080/api/v1/projects"
const EditProject = () => {
    const [name, setName] = useState('')
    const [description, setDedcription] = useState('')
    const [picture, setPicture] = useState('')
    const [link1, setLink1] = useState('')
    const [link2, setLink2] = useState('')
    const {id} = useParams();    
    
    const navigate = useNavigate()
    const cancel = () => {
        navigate("/projects");
    };

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${url}/${id}`, {name: name, description: description, picture: picture, link1: link1, link2: link2}) 
        navigate("/projects");
    }
    useEffect(() => {
        const getProjectById = async () => {
            const response = await axios.get(`${url}/${id}`);
            const data = response.data; 
            console.log(data) 
            setName(data.name);
            setDedcription(data.description);
            setPicture(data.picture);
            setLink1(data.link1);
            setLink2(data.link2);
        }
getProjectById()
    }, [id])

    return(
        <>
        <div className="all-container-edit">
            <div className="container-create">
                <h3>Modify project ID: {id}</h3>
                <form onSubmit={update}>
                    <div>
                        <label htmlFor="nameCita">Project name -----</label>
                        <input type="text" id="hover"
                        value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="nameUsario">Dedcription: ------</label>
                        <input type="text" id="hover"
                        value={description} onChange={(e) => setDedcription(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="fecha">Picture -----------</label>
                        <input type="text" id="hover"
                        value={picture} onChange={(e) => setPicture(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="hora">Link GitHub: -----</label>
                        <input type="text" id="hover"
                        value={link1} onChange={(e) => setLink1(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="hora">Other link: -------</label>
                        <input type="text" id="hover"
                        value={link2} onChange={(e) => setLink2(e.target.value)}/>
                    </div>
                    <button className="buttons">Confirm</button>
                    <button className="buttons" onClick={cancel}>Cancel</button>   
                </form>
            </div>
        </div>
        </>
    )

}

export default EditProject; */



