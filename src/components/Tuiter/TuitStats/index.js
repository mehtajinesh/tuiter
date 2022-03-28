import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (<span onClick={likeTuit}>
    {tuit.liked && <i className="fas fa-heart me-1"
    style={{color: 'red'}}/>}
        {!tuit.liked && <i className="far fa-heart me-1"/>}
        {tuit.stats && <span className="small text-muted ms-2">{tuit.stats.likes}</span>}
    </span>);
}
export default TuitStats;