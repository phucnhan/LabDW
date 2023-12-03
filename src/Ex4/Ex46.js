import React from "react";
import ReactDOM from "react-dom";

function Ex46() {
    const element = (
        <div style={{
            fontSize: '15px',
            backgroundColor: '#d0f0c0',
            border: '1px solid green',
            padding: '10px'
        }}>
            Green is the prime color of the world
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
};
export default Ex46;