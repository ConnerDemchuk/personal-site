import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import "./Header.scss";


const Header = () => {
    return (
        <Navbar className="header" sticky="top" expand="lg" className="my-brand">
            <Navbar.Brand href="#home">Conner Demchuk</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto links">
                    <Link to={`/`}>Home</Link>
                    <Link to={`/projects`}>My Projects</Link>
                    <Link to={`/beans`}>Beans</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;