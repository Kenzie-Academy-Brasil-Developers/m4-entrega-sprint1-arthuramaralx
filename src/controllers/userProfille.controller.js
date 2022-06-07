import userProfileService from "../services/userProfile.service";

const userProfileController = (request, response) => {
    const {uuid} = request.user;

    try{
        const userProfile = userProfileService(uuid);
        return response.status(200).json(userProfile);
    }
    catch(error){
        return response.status(401).json({ message: error.message });   
    }
};

export default userProfileController