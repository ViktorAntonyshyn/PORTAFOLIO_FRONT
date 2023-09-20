import { Icon } from '@iconify/react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="copiright" >
                    <h6> © Viktor Antonyshyn 2023 </h6>
                </div>
                <div className="links-social">
                    <a href="https://github.com/ViktorAntonyshyn" target="_blank" rel="noopener noreferrer">
                        <Icon icon="bxl:github" color="#444" width="40" height="40" />
                    </a>
                    <a href="https://www.linkedin.com/in/viktor-antonyshyn/" target="_blank" rel="noopener noreferrer">
                        <Icon icon="devicon-plain:linkedin" color="#444" width="33" />
                    </a>
                    <a href="https://www.t.me/BIKTOP_A" target="_blank" rel="noopener noreferrer">
                        <Icon icon="file-icons:telegram" color="#444" width="33" />
                    </a>
                    <a href="https://wa.me/qr/2Y7CB33BIZOYP1" target="_blank" rel="noopener noreferrer">
                        <Icon icon="simple-icons:whatsapp" color="#444" width="33" />
                    </a>
                </div>
            </div>


        </>

    );
}

export default Footer;