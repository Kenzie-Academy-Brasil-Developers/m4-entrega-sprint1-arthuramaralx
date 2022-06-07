import users from "../database"
import jwt from "jsonwebtoken"
import * as bcrypt from "bcryptjs"

const updateUserService = (id, email, name, idToken) => {
    const updatedUser = {
        uuid: id,
        name,
        email,
        updatedOn: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
    }

        const user = users.find((user)=> user.uuid === idToken)

        if(!user.isAdm){

            if(id !== idToken){
        
                throw new Error("Missing admin permissions");
            }
          
        }


    const userIndex = users.findIndex(element => element.uuid === id)

    if (userIndex === -1) {
        throw new Error("User not found")
    }

    users[userIndex] = {...users[userIndex], ...updatedUser }
const { updatedOn, createdOn , isAdm, uuid } = users[userIndex]


return {email, createdOn, updatedOn, isAdm, name, uuid}

};

export default updateUserService