import React, { Component } from "react";
import ReactDOM from "react-dom";

class Ex47 extends Component {
    render() {
        return (
            <form>
                <label htmlFor="name">UserName:</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="name">password:</label>
                <input type="password" id="password" name="password" />
                <button type="submit" />
            </form>
        );
    }
}

ReactDOM.render(<Ex47 />, document.getElementById('root'));

export default Ex47;
