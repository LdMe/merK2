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
        console.log(req)
        const {email,password}  = req.body;
        const result = await authController.login(email,password);
        
        const data = {
            name:result.name,
            user_id: result.user_id,
            role: result.role
        }
        const token = createToken(data);
        res.cookie("token",token,{httpOnly:true});
        res.json({token:token,user:data});
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
    res.clearCookie('token')
    res.json({message:"cookie deleted"});
}

async function getUserInfo(req,res){
    const userId = req.user.user_id;
    const result = await authController.getUserInfo(userId);
    res.send({user:result});
}

export default {
    register,
    login,
    logout,
    getUserInfo
}