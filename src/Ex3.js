import React from "react";

class Ex3 extends React.Component {
    onChange() {
        console.log("change");
    }
    onBlur() {
        console.log("blured");
    }
    render() {
        return <input onChange={this.onChange} onBlur={this.onBlur} />
    }
}

export default Ex3;