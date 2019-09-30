import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "react-router-dom/Link";
import Col from "react-bootstrap/Col";
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import './nav-bar.components.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Navbar fixed="top" style={{ backgroundColor: '#55D2D1' }} className="nav-bar pareup-blue-bg mt-auto mb-auto" expand="lg">
                <Col sm="auto">
                    <Link to="/">
                        <img
                            src={logo2}
                            width="180"

                            className="d-inline-block align-top"
                            alt="PareUp Logo"
                        />
                    </Link >
                </Col>
                <Nav className="ml-auto">
                    <Col sm="auto">
                        <Link className="nav-bar-link" to="/offers">Browse Offers</Link>
                    </Col>
                    <Col sm="auto">
                        <Link className="nav-bar-link" to="/survey">Submit Offer</Link>
                    </Col>
                    <Col sm="auto">
                        <Link className="nav-bar-link" to="/trial">Trial Page</Link>
                    </Col>
                    <Col sm="auto">
                        <Link className="nav-bar-link" to="/negotiation-tips">Negotiation Tips</Link>
                    </Col>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBar;