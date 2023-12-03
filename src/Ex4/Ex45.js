import React from "react";
import ReactDOM from "react-dom";

function Ex45() {
    const user = {
        firstName: 'Elon',
        lastName: 'Musk',
        age: '49'
    };

    const element = (
        <div>
            <h1>User Information</h1>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Age: {user.age}</p>
        </div>
    );

    ReactDOM.render(element, document.getElementById('root'));
}

export default Ex45;
