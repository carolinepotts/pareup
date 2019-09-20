import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './sorry_message.component.css';


const SorryMessage = () => {
    return (
        <Jumbotron className="jumbo" style={{backgroundColor: `#65CCA0`}}>
            <h1 style={{color:`#FFFFFF`}}>Sorry, there is not enough data to display</h1>
        </Jumbotron>
    )
}

export default SorryMessage