import React from 'react';
import './card.component.css';

const Card = (props) => {
    return (
        props.data.map((dat) => (
            <li style={{ padding: '10px' }} key={dat.id}>
                <span style={{ color: 'gray' }}> id: </span> {dat.id} <br />
                <span style={{ color: 'gray' }}> Location: </span> {dat.location} <br />
                <span style={{ color: 'gray' }}> Salary: </span> {dat.salary} <br />
                <span style={{ color: 'gray' }}> Internships: </span> {dat.internships} <br />
                <span style={{ color: 'gray' }}> Equity: </span> {dat.equity} <br />
                <span style={{ color: 'gray' }}> Signing Bonus: </span> {dat.signing_bonus} <br />
            </li>
        ))
    );
}

export default Card;