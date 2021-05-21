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
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/add">Add product</Nav.Link>
                                
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
                
            </>
        );
    }
}

export default NavBar;
