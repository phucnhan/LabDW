import React from "react";
function Ex23() {
    const [name, setName] = React.useState("Nhan");
    const [age, setAge] = React.useState(21);

    return (
        <>
            <section>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <p>My name is {name}</p>
            </section>
            <section>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                <p>My age is {age}</p>
            </section>
        </>
    )
};

export default Ex23;