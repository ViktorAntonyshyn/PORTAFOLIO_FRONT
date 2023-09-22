import Navbar1 from "../components/Atomos/Navbar1";
import Footer from "../components/Atomos/Footer";
import React from 'react';
import './Start.css'

const Start = () => {
    return (
        <>
            <div>
                <Navbar1 />
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
                <h3>Test</h3>
            </div>
            <div>
            <h3>Test1</h3> <h3>Test1</h3> <h3>Test1</h3> <h3>Test1</h3>
            <img className="pic-start" src="/src/pics/background.png" alt="Alternative Text" />
                <a href="/about">
                    <img className="pic-start" src="/src/pics/back1.png" alt="Alternative Text" />
                </a>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Start;