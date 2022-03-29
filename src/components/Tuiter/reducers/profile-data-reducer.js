import profileDataJson from '../data/profileData.json';

const profileReducer = (state = profileDataJson, action) => {
    switch (action.type) {
        case 'update-profile':
            return {
                ...state,
                "firstName": action.newProfileData.userFullName.split(" ")[0],
                "lastName": action.newProfileData.userFullName.split(" ")[1],
                "bio": action.newProfileData.userBio,
                "location": action.newProfileData.userLocation,
                "website": action.newProfileData.userWebsite,
                "dateOfBirth": action.newProfileData.userDOB
            };
        default:
            return state;
    }
};

export default profileReducer;