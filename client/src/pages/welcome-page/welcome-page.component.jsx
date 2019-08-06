import React from 'react';
import './welcome-page.component.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Link from "../../components/nav-bar/nav-bar.component";

class WelcomePage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={{paddingTop: 100}}>
                <Row>
                    <Col md={2}/> {/* this is just an offset to center the column below. Note a row will add up to 12 total. */}
                    <Col md={8} className="text-center">
                        <h1> Welcome to <span style={{color: `#1d60b8`}}>PareUp</span></h1>
                        <p>
                            View salaries offered to current and past Duke students
                            to get an idea of what you should be offered. <br/>
                            Filter by job title, company size, and more.
                        </p>
                        <p>
                            Click the Browse Offers button below to check it out!
                        </p>

                        <br/>

                        <Button variant="primary" size="lg">
                            <a href="/offers" className="nav-bar-link no-effect-on-hover">
                                Browse Offers
                            </a>
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default WelcomePage;