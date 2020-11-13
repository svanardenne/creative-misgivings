import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const MainNav = () => {
    return(
    <Navbar id="main-nav" className="navbar-dark" expand="lg" fixed="top">
    <Navbar.Brand href="#home">Creative Misgivings</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Writing" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Fiction</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Freelance</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Doodles</Nav.Link>
            <Nav.Link href="#link">Quotes</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            {/* Put social media links in navbar? */}
            
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    );
}

export default MainNav;