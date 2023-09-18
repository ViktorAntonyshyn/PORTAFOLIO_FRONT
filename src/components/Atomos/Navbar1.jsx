import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar1.css'

import { Icon } from '@iconify/react';



function Navbar1() {
    return (
        <><div className='header'>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" id='nav'>
                    <Container fluid>
                        <Navbar.Brand href="#">VIKTOR  ANTONYSHYN </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >

                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/about">About me</Nav.Link>
                                    <Nav.Link href="#action2">Curriculum</Nav.Link>
                                    <NavDropdown title="Projects"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="/projects">All projects</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/projects/manager">Project Manager</NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="Skills"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="/projects">Technologies</NavDropdown.Item>
                                        <NavDropdown.Item href="/projects">Tools</NavDropdown.Item>
                                        <NavDropdown.Item href="/projects">Software</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/languages">Languages</NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="Curriculum"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="/public/CV Víktor Antonyshynf5v2.pdf" target="_blank">Open</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/public/CV Víktor Antonyshynf5v2.pdf" download>Download</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="/contacts">Contacts</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
        </>
    );
}

export default Navbar1;