import users from "../database";
import jwt from "jsonwebtoken";

const verifyAdmMiddleware = (request, response, next) => {
  let token = request.headers.authorization;

  if (!token) {
    return response
      .status(401)
      .json({ message: "Missing authorization headers" });
  }
  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(401).json({ message: "Missing admin permissions" });
    }
    const user = users.find((user) => user.email === decoded.email);
    if (!user.isAdm) {
      return response.status(401).json({ message: "Unauthorized" });
    }
  });

  next();
};

export default verifyAdmMiddleware;
