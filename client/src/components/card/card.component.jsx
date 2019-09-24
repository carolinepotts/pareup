import React from 'react';
import './card.component.css';
import { Card, Row, Col } from "react-bootstrap";

const DisplayCard = ({ data, field, title }) => {
    const stats = data.map((elem) => elem[field]).sort(function (a, b) { return a - b });
    const len = stats.length;
    const median = (stats[Math.floor((len - 1) / 2)] + stats[Math.ceil((len - 1) / 2)]) / 2
    const per_25 = Math.floor(len * 0.25) == Math.ceil(len * 0.25) ? (stats[Math.floor(len * 0.25) - 1] + stats[Math.floor(len * 0.25)]) / 2 : stats[Math.ceil(len * 0.25) - 1]
    const per_75 = Math.floor(len * 0.75) == Math.ceil(len * 0.75) ? (stats[Math.floor(len * 0.75) - 1] + stats[Math.floor(len * 0.75)]) / 2 : stats[Math.ceil(len * 0.75) - 1]

    return (
        <Card className="text-center" text="black" style={{borderColor: '#65CCA0', borderWidth: '1px'}}>
            {/* {console.log(stats)} */}
            <Card.Header style={{backgroundColor: '#65CCA0'}}>
                <h2 style={{color: '#FFFFFF'}}>{title}</h2>
            </Card.Header>
            <Card.Body>
                <Row>
                <Col>
                        <h2>  ${Math.round(per_25 / 1000)}k </h2>
                        25th
        
                    </Col>
                    <Col>
                        <h2>  ${Math.round(median / 1000)}k </h2>
                        Median
        
                    </Col>
                    <Col>
                        <h2>  ${Math.round(per_75 / 1000)}k </h2>
                        75th
        
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default DisplayCard;