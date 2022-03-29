import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileScreen = () => {
    const profileData = useSelector(state => state.profile);
    return (<div className="d-flex flex-column">
        <div className="fw-bold text-white">
            {profileData.firstName}&nbsp;{profileData.lastName}
        </div>
        <div className="fw-bold small">
            {profileData.tuitCount} Tuits
        </div>
        <div>
            <img src={profileData.bannerPicture} className="img-fluid" alt="Responsive banner"/>
            <img src={profileData.profilePicture} className="position-relative img-thumbnail rounded-circle border border-dark"
                 alt="profile icon" style={{top:-60, left:20}}/>
        </div>
        <div style={{marginTop:-90}}>
            <Link to="/tuiter/editprofile">
                <button type="button" className="btn btn-secondary rounded-pill fw-bold bg-black float-end">Edit Profile
                </button>
            </Link>
        </div>
        <h3 className="fw-bold text-white">
            {profileData.firstName}&nbsp;{profileData.lastName}
        </h3>
        <h6 className="text-muted">
            @{profileData.handle}
        </h6>
        <div className="text-white">
            {profileData.bio}
        </div>
        <div className="d-flex mt-2">
            <div className="pe-3">
                <i className="fa-solid fa-location-dot"/>
                &nbsp;{profileData.location}
            </div>
            <div className="pe-3">
                <i className="fa-solid fa-cake-candles"/>
                &nbsp; Born &nbsp;{
                new Date(profileData.dateOfBirth).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"})
            }
            </div>
            <div className="pe-3">
                <i className="fa-solid fa-calendar-days"/>
                &nbsp; Joined &nbsp;{profileData.dateJoined}
            </div>
        </div>
        <div className="d-flex">
            <div>
                <span className="text-white fw-bold">{profileData.followingCount}</span>
                <span className="text-muted">&nbsp;Following</span>
            </div>
            <div className="ps-3">
                <span className="text-white fw-bold">{profileData.followersCount}</span>
                <span className="text-muted">&nbsp;Followers</span>
            </div>
        </div>
    </div>);
}

export default ProfileScreen;