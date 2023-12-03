import React from "react";
function Ex21() {
    const [name] = React.useState("Nhan");
    const [age] = React.useState(21);

    return (
        <>
            <p>My name is {name}</p>
            <p>My age is {age}</p>
        </>
    )
};

export default Ex21;