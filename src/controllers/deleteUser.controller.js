import deleteUserService from "../services/deleteUser.service";

const deleteUsercontroller = (request, response) => {
    const {id} = request.params

    try{
        const deleteUser = deleteUserService(id)   
        return response.status(200).json(deleteUser)
    } catch(error){
        return response.status(401).json({ message: error.message });   
    }
}

export default deleteUsercontroller