import React from "react";
import ReactDOM from "react-dom";

function Ex42() {
    const handleClick = () => {
        alert("Alert!!!");
    };

    const element = (
        <button style={{ margin: "10px 10px" }} type="primary" onClick={handleClick}>
            Button
        </button>
    );

    ReactDOM.render(element, document.getElementById("root"));
}

export default Ex42;
