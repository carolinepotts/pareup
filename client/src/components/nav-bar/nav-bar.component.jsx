import React from 'react';
import Navbar from "react-bootstrap/Navbar";
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
                <Col sm="auto">
                    <Link className="nav-bar-link bold-on-hover-text" to="/offers">Browse Offers</Link>
                </Col>
                <Col sm="auto">
                    <Link className="nav-bar-link bold-on-hover-text" to="/survey">Submit Offer</Link>
                </Col>
                <Col sm="auto">
                    <Link className="nav-bar-link bold-on-hover-text" to="/trial">Trial Page</Link>
                </Col>
                <Col sm="auto">
                    <Link className="nav-bar-link bold-on-hover-text" to="/negotiation-tips">Negotiation Tips</Link>
                </Col>
            </Navbar>
        )
    }
}

export default NavBar;