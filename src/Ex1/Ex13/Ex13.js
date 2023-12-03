import React from "react";
import ReactDOM from "react-dom";
import MyButton from "./MyButton";
const Ex13 = () => {
    const root = ReactDOM.createRoot(document.getElementById("root"));

    function render({ second }) {
        root.render(
            <main>
                <MyButton />
                <MyButton text={second.text} disable={second.disable} />
            </main>
        );
    }

    render({
        second: {
            text: "Second Button",
            disable: true,
        },
    });
};
export default Ex13;