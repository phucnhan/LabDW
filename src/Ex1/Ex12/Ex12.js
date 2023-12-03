import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import MyButton from "./MyButton";
import MyList from "./MyList";

const appState = {
    text: "My Button",
    disabled: true,
    items: ["First", "Second", "Third"],
};
const Ex12 = () => {


    const render = (state) => {
        ReactDOM.createRoot(document.getElementById("root")).render(
            <main>
                <MyButton text={state.text} disabled={state.disabled} />
                <MyList items={state.items} />
            </main>
        );
    };

    useEffect(() => {
        render(appState);

        const timeoutId = setTimeout(() => {
            appState.disabled = false;
            appState.items.push("Fourth");
            render(appState);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    return null;
};

export default Ex12;
