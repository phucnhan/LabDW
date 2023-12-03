import React from "react";
import ReactDOM from "react-dom";

const Ex04 = () => {
    const array = ["first", "Second", "Third"];

    const object = {
        first: 1,
        second: 2,
        third: 3,
    };

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <section>
            <h1>Array</h1>
            <ul>
                {array.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h1>Object</h1>
            <ul>
                {Object.keys(object).map((key) => (
                    <li key={key}>
                        <strong>{key}: </strong>
                        {object[key]}
                    </li>
                ))}
            </ul>
        </section>
    );

    return <div></div>;
};

export default Ex04;
