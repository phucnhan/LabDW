import React from 'react';
import ReactDOM from 'react-dom';

function Ex43() {
    const smartPeople = [
        { name: 'Johann Goethe', age: 82, IQ: 210 },
        { name: 'Albert Einstein', age: 76, IQ: 205 },
        { name: 'Leonardo da Vinci', age: 67, IQ: 180 },
        { name: 'Isaac Newton', age: 84, IQ: 190 },
        { name: 'James Maxwell', age: 48, IQ: 190 },
        { name: 'Rudolf Clausius', age: 66, IQ: 190 },
        { name: 'Nicolaus Copernicus', age: 70, IQ: 1453 },
        { name: 'Gottfried Leibniz', age: 70, IQ: 182 },
        { name: 'William Sidis', age: 46, IQ: 200 }
    ];

    const element = (
        <ul>
            {smartPeople.map((person, index) => (
                <li key={index}>
                    {person.name} - Age: {person.age}, IQ: {person.IQ}
                </li>
            ))}
        </ul>
    );

    ReactDOM.render(element, document.getElementById('root'));
};

export default Ex43;