import User from "../models/user.js";
import Seller from "../models/seller.js";
import {hash,compare} from "../utils/bcrypt.js";

function loginForm(req,res){
    const {error,message} = req.query;
    res.render("auth/login",{error,message});
}
function registerForm(req,res){
    const {error,message} = req.query;
    res.render("auth/register",{error,message});
}

async function register(req,res){
    const {name,email,password,role} = req.body;
    const oldUser = await User.findOne({
        where:{
            email: email
        }
    })
    if(oldUser){
        return res.redirect(`/register?error=a+user+with+that+email+already+exists`);
        //return res.json({error:"a user with that email already exists "})
    }
    const hashedPassword = await hash(password)
    const result = await User.create({name,email,password:hashedPassword});
    if(role=="client"){

    }else{
        const seller = await Seller.create({user_id:result.user_id,stand_id:1})  
    }
    res.redirect("/login?message=Registered+successfully");
}
async function login(req,res){
    const {email,password} = req.body;
    const user = await User.findOne({
        where:{
            email: email
        }
    })
    if(!user){
        return res.redirect("/login?error=invalid+credentials");
        //return res.json({error:"invalid credentials"});
    }
    const result = await compare(password,user.password);
    if(result){ // si la contraseña es correcta
        
        const seller = await Seller.findByPk(user.user_id);
        const role = seller ? "seller":"client";
        req.session.user = {
            user_id:user.user_id,
            role:role
        }
        return res.redirect("/?message=You+are+logged+in");
        //return res.json({message:"You are logged in"})
    }else{
        return res.redirect("/login?error=invalid+credentials");
        //return res.json({error:"invalid credentials"})
    }

}

function logout(req,res){
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