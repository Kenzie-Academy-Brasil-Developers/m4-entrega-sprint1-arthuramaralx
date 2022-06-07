import { Router } from "express";

import createUserController from "../controllers/createUser.controller";

import createUserService from "../services/createUser.service";

import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import userLoginController from "../controllers/userLogin.controller";
import listUserController from "../controllers/listUser.controller";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import updateUserController from "../controllers/updateUser.controller";
import deleteUsercontroller from "../controllers/deleteUser.controller";
import userProfileController from "../controllers/userProfille.controller";
import verifyLoginMiddleware from "../middlewares/verifyLogin.middleware";
import verifyAdmMiddleware from "../middlewares/verifyAdm.middleware";

const router = Router();

router.post("", verifyEmailAvailabilityMiddleware, createUserController);

router.get("", verifyAuthTokenMiddleware, verifyAdmMiddleware, listUserController);

router.get("/profile", verifyAuthTokenMiddleware, userProfileController);

router.patch("/:id", verifyAuthTokenMiddleware, updateUserController);

router.delete("/:id", verifyAuthTokenMiddleware, deleteUsercontroller);

export default router;
