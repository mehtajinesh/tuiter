import React, {useState} from "react";
import {useDispatch} from "react-redux"
import {createTuit} from "../../../actions/tuits-actions";

const WhatsHappening = () => {
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});
    return (<div className="clearfix">
      <textarea className="form-control" rows="3" value={newTuit.tuit} onChange={(e) => setNewTuit({
          ...newTuit, tuit: e.target.value
      })}/>
        <button className="btn btn-primary rounded-pill float-end m-2" onClick={() => createTuit(dispatch, newTuit)}>
            Tuit
        </button>
    </div>);
}
export default WhatsHappening;