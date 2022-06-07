import users from "../database";

const userProfileService = (uuid) => {
    const user = users.find((user) => user.uuid === uuid)
    if(!user){
        throw new Error("User not found"); 
    }
    const {email, createdOn, updatedOn , isAdm, name} = user
    return {email, createdOn, updatedOn, isAdm, name, uuid}
}
export default userProfileService
