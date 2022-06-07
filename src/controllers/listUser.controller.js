import users from "../database";
import listUsersService from "../services/listUser.service";

const listUserController = (request, response) => {
    const user = listUsersService();
    
    return response.status(200).json(users)
}

export default listUserController