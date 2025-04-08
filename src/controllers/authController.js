import User from "../models/user.js";
import Seller from "../models/seller.js";

function loginForm(req,res){
    res.render("auth/login");
}
function registerForm(req,res){
    res.render("auth/register");
}

async function register(req,res){
    const {name,email,password,role} = req.body;
    
    const result = await User.create({name,email,password});
    if(role=="client"){

    }else{
        const seller = await Seller.create({user_id:result.user_id,stand_id:1})
        res.json({user:result,seller:seller});
    }
    res.json(result);
}

export default {
    loginForm,
    registerForm,
    register
}