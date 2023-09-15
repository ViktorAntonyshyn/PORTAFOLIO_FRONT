import Languages from '../components/Atomos/Languages';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Navbar1 from '../components/Atomos/Navbar1';
import './Lang.css'




const Lang = () => {
  return (
    <><div>
      <Navbar1 />
    </div>
      <div className='lang'>
        <Languages />
      </div>

    </>
  )
}

export default Lang;