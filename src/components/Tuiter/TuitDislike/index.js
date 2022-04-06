import {useDispatch} from "react-redux";
import {updateTuit} from "../../../actions/tuits-actions";

const updateDisLikeThumbs = (tuit) => {
    let updatedTuit = {...tuit}
    updatedTuit.disliked = updatedTuit.stats.dislikes > 0;
    updatedTuit.stats.dislikes++;
    return updatedTuit
}
const TuitDisLike = ({tuit}) => {
    const dispatch = useDispatch();
    return (<span onClick={() => updateTuit(dispatch, updateDisLikeThumbs(tuit))}>
    {tuit.disliked && <i className="fas fa-thumbs-down me-1"
                      style={{color: 'blue'}}/>}
        {!tuit.disliked && <i className="far fa-thumbs-down me-1"/>}
        {tuit.stats && <span className="small text-muted ms-2">{tuit.stats.dislikes}</span>}
    </span>);
}
export default TuitDisLike;