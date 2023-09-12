import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './CreateProject.css'

const url = "http://localhost:8080/api/v1/projects"
const CreateProject = () => {
    const [name, setName] = useState('')
    const [description, setDedcription] = useState('')
    const [picture, setPicture] = useState('')
    const [link1, setLink1] = useState('')
    const [link2, setLink2] = useState('')

    const navigate = useNavigate()
    const cancel = () => {
        navigate("/");
    };

    const store = async (e) => {
        e.preventDefault()
        await axios.post(url, { name: name, description: description, picture: picture, link1: link1, link2: link2 })
        navigate("/")
    };

    return (
        <>
            <div className="all-container-create">
                <div className="containet-create">
                    <h2>Add project</h2>
                    <form onSubmit={store}>
                        <div>
                            <form>Name of project</form>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <form>Description</form>
                            <input type="text" value={description} onChange={(e) => setDedcription(e.target.value)} />
                        </div>
                        <div>
                            <form>Picture</form>
                            <input type="text" value={picture} onChange={(e) => setPicture(e.target.value)} />
                        </div>
                        <div>
                            <form>Link GitHub</form>
                            <input type="text" value={link1} onChange={(e) => setLink1(e.target.value)} />
                        </div>
                        <div>
                            <form>Other link</form>
                            <input type="text" value={link2} onChange={(e) => setLink2(e.target.value)} />
                        </div>
                        <button className="buttons">Upload</button>
                        <button className="buttons" onClick={cancel}>Cancel</button>
                        {/* <NavLink to="/"><button className="buttons">Cancelar</button></NavLink> */}

                    </form>
                </div>
                
            </div>
        </>
    )
}

export default CreateProject;
