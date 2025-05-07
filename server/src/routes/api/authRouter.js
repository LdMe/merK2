import { Router } from "express";
import authApiController from "../../controllers/auth/authApiController.js";
import { isLoggedInAPI } from "../../middlewares/authMiddleware.js";
const router = Router();


router.post("/register",authApiController.register);
router.post("/login",authApiController.login);
router.post("/logout",authApiController.logout);
router.get("/user-info",isLoggedInAPI,authApiController.getUserInfo);

export default router;