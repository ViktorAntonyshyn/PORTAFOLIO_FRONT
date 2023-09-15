import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navbar1() {
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
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
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown title="Projects"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="#action5">All projects</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="/projects">Project1</NavDropdown.Item>
                                        <NavDropdown.Item href="/projects">Project2</NavDropdown.Item>
                                        <NavDropdown.Item href="/projects">Project3</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        
                                    </NavDropdown>
                                    <NavDropdown title="Skills"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="/projects">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="/projects">Software</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/languages">Languages</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#action1">Contacts</Nav.Link>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Navbar1;