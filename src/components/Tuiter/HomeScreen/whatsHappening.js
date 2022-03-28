import React, {useState} from "react";
import {useDispatch} from "react-redux"

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (<div className="clearfix">
      <textarea className="form-control" rows="3" value={whatsHappening}
                onChange={(event) => setWhatsHappening(event.target.value)}>
      </textarea>
        <button className="btn btn-primary rounded-pill float-end m-2" onClick={tuitClickHandler}>
            Tuit
        </button>
    </div>);
}
export default WhatsHappening;