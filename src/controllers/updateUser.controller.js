import updateUserService from "../services/updateUser.service";

const updateUserController = (request, response) => {
    const {uuid} = request.user;
    const {id} = request.params;
    const {email, name} = request.body;
    try{

        const updatedUser = updateUserService(id, email, name, uuid)
        return response.status(200).json(updatedUser);
    }
    catch(error){
        return response.status(401).json({ message: error.message });   
    }
}
export default updateUserController;