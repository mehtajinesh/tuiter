import {useDispatch} from "react-redux";
import TuitLike from "../TuitLike";
import TuitDislike from "../TuitDislike";
import {deleteTuit} from "../../../actions/tuits-actions";
import React from "react";
const TuitListItem = ({key = "123", tuit = {
    "_id": "123",
    "topic": "Web Development",
    "postedBy": {
        "username": "ReactJS"
    },
    "liked": true,
    "disliked": false,
    "verified": false,
    "handle": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "attachments": {
        "video": "unKvMC3Y1kI"
    },
    "logoImage": "./../images/reactjs-logo.svg",
    "avatarImage": "./../images/reactjs-logo.svg",
    "stats": {
        "comments": 123, "retuits": 234, "likes": 345, "disliked":5445
    }
}}) => {
    const dispatch = useDispatch();

    return (<div className="list-group-item p-2 bg-black">
        <div className="row g-0">
            <div className="col-1">
                <img src={tuit["avatarImage"]} className="img-fluid rounded-circle" alt="post icon"/>
            </div>
            <div className="col ms-2">
                <div className="d-flex flex-column">
                    <div className="col-12 d-flex">
                        <div className="fw-bold small">{tuit.postedBy.username} &nbsp;</div>
                        <div className={tuit.verified ? "" : "d-none"}><i className="fa-solid fa-circle-check"/>
                        </div>
                        <div className="small text-muted">&nbsp;@{tuit.handle}</div>
                        <div className="small text-muted">&nbsp; &#183; {tuit.time}</div>
                    </div>
                    <div className="col-12">
                        {tuit.topic}
                    </div>
                    <div className="col-12 mt-2">
                        {tuit.tuit}
                    </div>
                    <div className="col-12 d-flex justify-content-around mt-2">
                        <div className="d-flex">
                            <i className="fa fa-light fa-comment text-muted"/>
                            <span className="small text-muted ms-2">{tuit.stats.comments}</span>
                        </div>
                        <div className="d-flex">
                            <i className="fa-solid fa-retweet text-muted"/>
                            <span className="small text-muted ms-2">{tuit.stats.retuits}</span>
                        </div>
                        <div className="d-flex">
                            <TuitLike tuit={tuit}/>
                        </div>
                        <div className="d-flex">
                            <TuitDislike tuit={tuit}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-1">
                <i onClick={() => deleteTuit(dispatch, tuit)}
                   className="fas fa-remove
                  fa-pull-right" />
            </div>
        </div>
    </div>);
}
export default TuitListItem;