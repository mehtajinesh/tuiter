import React from "react";
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom'

const NavigationSidebar = () => {
    const location = useLocation();
    let activeTab;
    switch (location.pathname){
        case '/tuiter/explore':
            activeTab = 'explore';
            break;
        case '/tuiter/home':
            activeTab = 'home';
            break;
        case '/tuiter/profile':
        case '/tuiter/editprofile':
            activeTab = 'profile';
            break;
        default:
            activeTab = 'home';
    }
    return (
        <div>
            <div className="list-group">
                <Link className="list-group-item" to="/">
                    <i className="fab fa-twitter"/>
                </Link>
                <Link className={`list-group-item fw-bold ${activeTab === 'home' ? 'active' : ''}`}
                   to="/tuiter/home">
                    <i className="fa-solid fa-house-chimney"/>
                    <span className="d-none d-xl-inline">Home</span>
                </Link>
                <Link className={`list-group-item fw-bold ${activeTab === 'explore' ? 'active' : ''}`}
                   to="/tuiter/explore">
                    <i className="fa-solid fa-hashtag"/>
                    <span className="d-none d-xl-inline">Explore</span>
                </Link>
                <a href="notifications.html" className="list-group-item fw-bold">
                    <i className="fa-solid fa-bell"/>
                    <span className="d-none d-xl-inline">Notifications</span>
                </a>
                <a href="messages.html" className="list-group-item fw-bold">
                    <i className="fa-solid fa-envelope"/>
                    <span className="d-none d-xl-inline">Messages</span>
                </a>
                <a href="bookmarks.html" className="list-group-item fw-bold">
                    <i className="fa-solid fa-bookmark"/>
                    <span className="d-none d-xl-inline">Bookmarks</span>
                </a>
                <a href="lists.html" className="list-group-item fw-bold">
                    <i className="fa-solid fa-list"/>
                    <span className="d-none d-xl-inline">Lists</span>
                </a>
                <Link className={`list-group-item fw-bold ${activeTab === 'profile' ? 'active' : ''}`}
                      to="/tuiter/profile">
                    <i className="fa-solid fa-user"/>
                    <span className="d-none d-xl-inline">Profile</span>
                </Link>
                <a href="more.html" className="list-group-item fw-bold">
                    <i className="fa-solid fa-circle"/>
                    <span className="d-none d-xl-inline">More</span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </div>

    );
}
export default NavigationSidebar;
