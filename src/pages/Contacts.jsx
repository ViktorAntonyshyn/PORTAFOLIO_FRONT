import Cont from "../components/Atomos/Cont";
import Footer from "../components/Atomos/Footer";
import Navbar1 from "../components/Atomos/Navbar1";
import './Contacts.css'


const Contacts = () => {
  return (
    <><div>
      <Navbar1 />
    </div>
      <div>
        <Cont />
      </div>
      <div className="footer-contacts">
        <Footer />
      </div>

    </>
  )
}

export default Contacts;