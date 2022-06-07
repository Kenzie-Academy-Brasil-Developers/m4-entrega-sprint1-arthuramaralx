import users from "../database";

const deleteUserService = (id, idToken) => {
  const userIndex = users.findIndex((element) => element.id === id);

  if (userIndex === -1) {
    throw new Error("User deleted with success");
  }
  const user = users.find((user)=> user.uuid === idToken)

  if(!user.isAdm){

      if(id !== idToken){
  
          throw new Error("Missing admin permissions");
      }
    
  }

  users.splice(userIndex, 1);

  return "Usuário excluído";
};

export default deleteUserService;
