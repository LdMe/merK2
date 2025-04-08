import User from "../models/user.js";
import Seller from "../models/seller.js";
import {hash,compare} from "../utils/bcrypt.js";

function loginForm(req,res){
    res.render("auth/login");
}
function registerForm(req,res){
    res.render("auth/register");
}

async function register(req,res){
    const {name,email,password,role} = req.body;
    const oldUser = await User.findOne({
        where:{
            email: email
        }
    })
    if(oldUser){
        return res.json({error:"a user with that email already exists "})
    }
    const hashedPassword = await hash(password)
    const result = await User.create({name,email,password:hashedPassword});
    if(role=="client"){

    }else{
        const seller = await Seller.create({user_id:result.user_id,stand_id:1})
        res.json({user:result,seller:seller});
    }
    res.json(result);
}
async function login(req,res){
    const {email,password} = req.body;
    const user = await User.findOne({
        where:{
            email: email
        }
    })
    if(!user){
        return res.json({error:"invalid credentials"});
    }
    const result = await compare(password,user.password);
    if(result){
        return res.json({message:"You are logged in"})
    }else{
        return res.json({error:"invalid credentials"})
    }

}
export default {
    loginForm,
    registerForm,
    register,
    login
}