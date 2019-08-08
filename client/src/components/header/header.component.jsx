import React from 'react';
import './header.components.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return <Navbar bg="light" >
        <Navbar.Brand href="#home">PareUp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/offers">View Offers</Nav.Link>
            <Nav.Link href="/survey">Enter Your Offer</Nav.Link>
            <Nav.Link href="/negotiation-tips">Negotiation Tips</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>;
    }
}

export default Header;