import { Router } from "express";
import authController from "../controllers/authController.js";
const router = Router();

router.get("/login",authController.loginForm)
router.get("/register",authController.registerForm);

router.post("/register",authController.register);
export default router;