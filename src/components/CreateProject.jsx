import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
/* import './CreateProject.css' */

const url = "http://localhost:8080/api/v1/projects";

const CreateProject = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [picture, setPicture] = useState(null); // guarda afchivo
    const [link1, setLink1] = useState('');
    const [link2, setLink2] = useState('');

    const navigate = useNavigate();

    const handlePictureChange = (e) => {
        // para obtener archivo con imagen
        const file = e.target.files[0];
        setPicture(file);
    };

    const cancel = () => {
        navigate("/projects");
    };

    const store = async (e) => {
        e.preventDefault();
        // Creamos FormData para enviar a servidor
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("picture", picture); 
        formData.append("link1", link1);
        formData.append("link2", link2);

        await axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data" // Importante anado verdadero valor de Content-Type
            }
        });
        navigate("/projects");
    };

    return (
        <div className="all-container-create">
            <div className="containet-create">
                <h2>Add project</h2>
                <form onSubmit={store}>
                    <div className="field">
                        <label>Name of project: --</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="field">
                        <label>Description: -------</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="field">
                        <label>Picture: -</label>
                        {/* campo para archivo */}
                        <input type="file" onChange={handlePictureChange} accept="image/*" />
                    </div>
                    <div className="field">
                        <label>Link GitHub: ------</label>
                        <input type="text" value={link1} onChange={(e) => setLink1(e.target.value)} />
                    </div>
                    <div className="field">
                        <label>Other link: -------- </label>
                        <input type="text" value={link2} onChange={(e) => setLink2(e.target.value)} />
                    </div>
                    <button className="buttons">Upload</button>
                    <button className="buttons" onClick={cancel}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default CreateProject;













// primero variant sin Upload archivos de dibujos

/* /const url = "http://localhost:8080/api/v1/projects"
const CreateProject = () => {
    const [name, setName] = useState('')
    const [description, setDedcription] = useState('')
    const [picture, setPicture] = useState('')
    const [link1, setLink1] = useState('')
    const [link2, setLink2] = useState('')

    const navigate = useNavigate()
    const cancel = () => {
        navigate("/projects");
    };

    const store = async (e) => {
        e.preventDefault()
        await axios.post(url, { name: name, description: description, picture: picture, link1: link1, link2: link2 })
        navigate("/projects")
    };

    return (
        <>
            <div className="all-container-create">
                <div className="containet-create">
                    <h2>Add project</h2>
                    <form onSubmit={store}>
                        <div>
                            <label>Name of project: </label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label>Description: ---- </label>
                            <input type="text" value={description} onChange={(e) => setDedcription(e.target.value)} />
                        </div>
                        <div>
                            <label>Picture: ---------</label>
                            <input type="text" value={picture} onChange={(e) => setPicture(e.target.value)} />
                        </div>
                        <div>
                            <label>Link GitHub: ----</label>
                            <input type="text" value={link1} onChange={(e) => setLink1(e.target.value)} />
                        </div>
                        <div>
                            <label>Other link: ------</label>
                            <input type="text" value={link2} onChange={(e) => setLink2(e.target.value)} />
                        </div>
                        <button className="buttons">Upload</button>
                        <button className="buttons" onClick={cancel}>Cancel</button>
                    </form>
                </div>
                
            </div>
        </>
    )
}

export default CreateProject; */
