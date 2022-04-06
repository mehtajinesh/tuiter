import TuitListItem from "./TuitListItem";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllTuits} from "../../../actions/tuits-actions";

const TuitsList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => findAllTuits(dispatch), []);
    return (<div>
        <ul className="list-group">
            {tuits.map(tuit => <div>
                <TuitListItem key={tuit._id}
                              tuit={tuit}/>
            </div>)}
        </ul>
    </div>);
};

export default TuitsList;