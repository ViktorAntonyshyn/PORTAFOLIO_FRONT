import Footer from "../components/Atomos/Footer";
import Navbar1 from "../components/Atomos/Navbar1";
import CreateProject from "../components/CreateProject";



const Create = () => {
    return (
        <>
            <div>
                <Navbar1/>
            </div>
            <div>
                <CreateProject />
            </div>
            <div>
            <Footer/> 
            </div>
        </>
    )
}

export default Create;