import { createToken } from "../../utils/token.js";
import authController from "./authController.js";

async function register(req, res) {
    try {
        const result = await authController.register(req.body);
        res.json(result);
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}
async function login(req, res) {
    try {
        const {email,password}  = req.body;
        const result = await authController.login(email,password);
        console.log(result);
        const token = createToken(result);
        res.json({token:token});
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}

function logout(req, res) {
    req.session.user = undefined;
    res.redirect("/");
}
export default {
    loginForm,
    registerForm,
    register,
    login,
    logout
}