import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './sorry_message.component.css';


const SorryMessage = () => {
    return (
        <Jumbotron className="jumbo" style={{backgroundColor: '#e8f2ff'}}>
            <h1>Sorry, there is not enough data to display</h1>
        </Jumbotron>
    )
}

export default SorryMessage