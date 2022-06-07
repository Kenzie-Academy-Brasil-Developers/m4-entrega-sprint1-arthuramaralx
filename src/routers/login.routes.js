import { Router } from "express";
import verifyLoginMiddleware from "../middlewares/verifyLogin.middleware";
import userLoginController
 from "../controllers/userLogin.controller";
const router = Router();
router.post("", verifyLoginMiddleware, userLoginController);

export default router;
