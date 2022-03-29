import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfile = () => {
    const profileData = useSelector(state => state.profile);
    let fullName = profileData.firstName + " " +profileData.lastName;
    const dispatch = useDispatch();
    const editProfileClickHandler = () => {
        dispatch({type: 'update-profile',
            newProfileData: {
                "userFullName": userFullName,
                "userBio": userBio,
                "userLocation": userLocation,
                "userWebsite": userWebsite,
                "userDOB": userDOB
            }
        });
    }
    let [userFullName, setUserFullName] = useState(fullName);
    let [userBio, setUserBio] = useState(profileData.bio);
    let [userLocation, setUserLocation] = useState(profileData.location);
    let [userWebsite, setUserWebsite] = useState(profileData.website);
    let [userDOB, setUserDOB] = useState(profileData.dateOfBirth);

    return (
        <div className="d-flex flex-column">
            <div className="d-flex mb-2">
                <div className="my-auto">
                    <Link to="/tuiter/profile">
                        <i className="fas fa-remove
                  fa-pull-right"/>
                    </Link>
                </div>
                <h5 className="text-white fw-bold ms-5 my-auto">
                    Edit Profile
                </h5>
                <div className="ms-auto my-auto">
                    <Link to="/tuiter/profile">
                        <button type="button" className="btn rounded-pill text-black bg-white fw-bold" onClick={editProfileClickHandler}>Save
                        </button>
                    </Link>
                </div>
            </div>
            <div>
                <img src={profileData.bannerPicture} className="img-fluid" alt="Responsive banner"/>
                <img src={profileData.profilePicture} className="img-thumbnail rounded-circle border border-dark"
                     alt="profile icon" style={{position: "relative", top:-60, left:20}}/>
            </div>
            <form style={{marginTop:-40}}>
                <div className="form-group border border-light p-2 mb-2">
                    <label className="small text-muted" htmlFor="profileName">Name</label>
                    <input type="text" className="form-control" id="profileName" value={userFullName} placeholder="Full Name" onChange={(event) => setUserFullName(event.target.value)}/>
                </div>
                <div className="form-group border border-light p-2 mb-2">
                    <label className="small text-muted" htmlFor="profileBio">Bio</label>
                    <textarea className="form-control" id="profileBio" rows="3" value={userBio} placeholder="Bio" onChange={(event) => setUserBio(event.target.value)}/>
                </div>
                <div className="form-group border border-light p-2 mb-2">
                    <label className="small text-muted" htmlFor="profileLocation">Location</label>
                    <input type="text" className="form-control" id="profileLocation" value={userLocation} placeholder="Location" onChange={(event) => setUserLocation(event.target.value)}/>
                </div>
                <div className="form-group border border-light p-2 mb-2">
                    <label className="small text-muted" htmlFor="profileWebsite">Website</label>
                    <input type="text" className="form-control" id="profileWebsite" value={userWebsite} placeholder="Website" onChange={(event) => setUserWebsite(event.target.value)}/>
                </div>
                <div className="form-group border border-light p-2 mb-2">
                    <label className="small text-muted" htmlFor="profileDOB">Date of Birth</label>
                    <div className="input-group date" id="datepicker">
                        <input type="date" className="form-control" id="profileDOB" defaultValue={userDOB} placeholder="Date of Birth" onChange={(event) => {setUserDOB(event.target.value)}
                            }/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditProfile;