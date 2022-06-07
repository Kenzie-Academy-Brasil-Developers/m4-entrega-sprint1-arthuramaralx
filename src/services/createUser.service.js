import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bycript from "bcryptjs";

const createUserService = async (email, name, password, isAdm) => {
  const hashedPassword = await bycript.hash(password, 10);

  const newUser = {
    email,
    name,
    password: hashedPassword,
    uuid: uuidv4(),
    isAdm,
    createdOn: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
    updatedOn: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
  };
  users.push(newUser);
  
  const returnUser = {email: newUser.email, name: newUser.name, uuid: newUser.uuid , isAdm: newUser.isAdm,
     createdOn: newUser.createdOn , updatedOn: newUser.updatedOn}
  return returnUser
};

export default createUserService;
