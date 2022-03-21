import React from "react";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <Link to="/">Labs</Link> | <Link to="/tuiter/home">Tuiter</Link>
        </div>
    );
};

export default HelloWorld;
