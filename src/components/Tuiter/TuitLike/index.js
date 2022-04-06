import {useDispatch} from "react-redux";
import {updateTuit} from "../../../actions/tuits-actions";

const updateLikeThumbs = (tuit) => {
    let updatedTuit = {...tuit}
    updatedTuit.liked = updatedTuit.stats.likes > 0;
    updatedTuit.stats.likes++;
    return updatedTuit
}
const TuitLike = ({tuit}) => {
    const dispatch = useDispatch();
    return (<span onClick={() => updateTuit(dispatch, updateLikeThumbs(tuit))}>
    {tuit.liked && <i className="fas fa-thumbs-up me-1"
    style={{color: 'red'}}/>}
        {!tuit.liked && <i className="far fa-thumbs-up me-1"/>}
        {tuit.stats && <span className="small text-muted ms-2">{tuit.stats.likes}</span>}
    </span>);
}
export default TuitLike;