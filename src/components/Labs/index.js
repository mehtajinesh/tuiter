import React from "react";
import Classes from "./classes";
import {Link} from "react-router-dom";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";

const Labs = () => {
    return (
        <div>
            <h1>Labs</h1>
            <Classes/>
            <Styles/>
            <ConditionalOutput/>
            <Link to="/hello">Hello</Link> |<Link to="/tuiter/home">Tuiter</Link> | <Link to="/todo">ToDo List React</Link>
        </div>
    );
};

export default Labs;
