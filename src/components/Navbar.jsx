import React from "react";
import { Nav, NavDropdown, Navbar, Form, Button, FormControl } from "react-bootstrap";

class NavBar extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg" className="px-4">
                    <Navbar.Brand href="#home">Amazonica</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="d-flex flex-row justify-content-between" style={{ flexGrow: 1 }}>
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex flex-row">
                                <FormControl type="text" placeholder="Search" className="mx-2" />
                                <Button variant="outline-success" className="mx-2">
                                    Search
                                </Button>
                            </Form>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
                ;
            </>
        );
    }
}

export default NavBar;
