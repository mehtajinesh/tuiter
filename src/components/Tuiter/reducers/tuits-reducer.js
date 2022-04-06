import {CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS, UPDATE_TUIT} from "../../../actions/tuits-actions";

const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case 'like-tuit':
            return state.map(tuit => {
                if (tuit._id === action.tuit._id) {
                    if (tuit.liked === true) {
                        tuit.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });
        case 'delete-tuit':
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case 'create-tuit':
            const newTuit = {
                tuit: action.tuit,
                _id: (new Date()).getTime() + '',
                postedBy: {
                    "username": "ReactJS"
                },
                stats: {
                    retuits: 111, likes: 222, comments: 333
                },
                liked: false,
                verified: true,
                handle: "ReactJS",
                time: "2h",
                title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                logoImage: "./../images/reactjs-logo.svg",
                avatarImage: "./../images/reactjs-logo.svg",
            }
            return [newTuit, ...state,];
        case FIND_ALL_TUITS:
            return action.tuits;
        case DELETE_TUIT:
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case CREATE_TUIT:
            return [action.newTuit,...state];
        case UPDATE_TUIT:
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                    action.tuit : tuit);
        default:
            return state;
    }
}


export default tuitsReducer;