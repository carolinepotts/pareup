import React from 'react';
import './nav-bar.components.css';
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Link from "react-router-dom/Link";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Navbar className="nav-bar" expand="lg">
                <Col sm="auto">
                    <Link className="nav-bar logo" to="/">PareUp</Link>
                </Col>
                <Col sm="auto">
                    <Link className="nav-bar" to="/offers">Browse Offers</Link>
                </Col>
                <Col sm="auto">
                    <Link className="nav-bar" to="/survey">Submit Offer</Link>
                </Col>
                <Col sm="auto">
                    <Link className="nav-bar" to="/trial">Trial Page</Link>
                </Col>
                <Col sm="auto">
                    <Link className="nav-bar" to="/negotiation-tips">Negotiation Tips</Link>
                </Col>
            </Navbar>
        )
    }
}

export default NavBar;