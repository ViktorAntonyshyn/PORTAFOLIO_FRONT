import EditProject from "../components/EditProject";
import Navbar1 from "../components/Atomos/Navbar1";
import Footer from "../components/Atomos/Footer";


const Edit = () => {
    return (
        <>
        <div>
            <Navbar1/>
        </div>
            <div>
                <EditProject />
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default Edit;