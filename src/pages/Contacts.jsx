import Footer from "../components/Atomos/Footer";
import Languages from "../components/Atomos/Languages";
import Navbar1 from "../components/Atomos/Navbar1";


const Contacts = () => {
    return (
      <><div>
        <Navbar1/>
      </div>
        <div className='lang'>
          <Languages />
        </div>
        <div>
            <Footer/>
        </div>
  
      </>
    )
  }
  
  export default Contacts;