import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Link from "react-router-dom/Link";
import Col from "react-bootstrap/Col";
import Helmet from "react-helmet"
import Headroom from "react-headroom"

import './nav-bar.components.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            // <Headroom>
            <Navbar fixed="top" style={{ backgroundColor: '#55D2D1' }} className="nav-bar pareup-blue-bg mt-auto mb-auto" expand="lg">
                {/* <Helmet bodyAttributes={{style: 'background-color: #65CCB8'}}/> */}
                <Col sm="auto">
                    <Link className="nav-bar-link logo no-effect-on-hover" to="/">PareUp</Link>
                </Col>
                {/* <div className="vr"> </div> */}
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
            // {/* </Headroom> */}
        )
    }
}

export default NavBar;