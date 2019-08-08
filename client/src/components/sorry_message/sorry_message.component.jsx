import React from 'react';
import './sorry_message.component.css';
import { Jumbotron } from 'react-bootstrap';


const SorryMessage = () => {
    return (
        <Jumbotron>
            <h1 className='jumbo'>Sorry, there is not enough data to display</h1>

        </Jumbotron>
    )
}

export default SorryMessage