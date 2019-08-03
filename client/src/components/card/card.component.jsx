import React from 'react';
import './card.component.css';

const Card = ({ data, field }) => {
    const stats = data.map((elem) => elem[field]).sort();
    const len = stats.length;
    const median = (stats[Math.floor((len - 1) / 2)] + stats[Math.ceil((len - 1) / 2)]) / 2

    return (
        <h2> {field.split('_').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')}: {  median } </h2>
    );
}

export default Card;