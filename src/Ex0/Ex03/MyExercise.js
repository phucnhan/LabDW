import React from "react";
import ReactDOM from "react-dom";
import MySection from "./MySection";
import MyButton from "./MyButton";

const MyExercise = ReactDOM.createRoot(document.getElementById("root"));

MyExercise.render(
    <MySection>
        <MyButton>My Button text</MyButton>
    </MySection>
);

export default MyExercise;
