import User from "../../models/user.js";
import Seller from "../../models/seller.js";
import {hash,compare} from "../../utils/bcrypt.js";
import { 
    UserNameNotProvided,
    UserEmailNotProvided,
    UserPasswordNotProvided,
    UserRoleIncorrect,
    UserEmailAlreadyExists,
    UserInvalidCredentials } from "../../utils/errors.js";


async function register(userData){
    //const {name,email,password,role} = req.body;
    if(!userData.name){
        throw new UserNameNotProvided();
    }
    if(!userData.email){
        throw new UserEmailNotProvided();
    }
    if(!userData.password){
        throw new UserPasswordNotProvided();
    }
    userData.role = userData.role ? userData.role.toLowerCase() : "client";
    const roles = ["client","seller"];
    if(!roles.includes(userData.role)){
        throw new UserRoleIncorrect();
    }
    // TODO passwordConfirm 
    const oldUser = await User.findOne({
        where:{
            email: userData.email
        }
    })
    if(oldUser){
        throw new UserEmailAlreadyExists();
    }
    const hashedPassword = await hash(userData.password);

    userData.password = hashedPassword;
    const result = await User.create(userData);
    if(userData.role=="client"){
        // TODO modelo client
    }else{
        const seller = await Seller.create({user_id:result.user_id,stand_id:1})  
    }
    return result;
}
async function login(email,password){
    if(!email){
        throw new UserEmailNotProvided();
    }
    if(!password){
        throw new UserPasswordNotProvided();
    }
    const user = await User.findOne({
        where:{
            email: email
        }
    })
    if(!user){
        throw new UserInvalidCredentials();
    }
    const isSamePassword = await compare(password,user.password);
    if(isSamePassword){ // si la contraseña es correcta
        const seller = await Seller.findByPk(user.user_id);
        const role = seller ? "seller":"client";
        user.role = role;
        return user
    }else{
        throw new UserInvalidCredentials();
    }

}

export default {
    register,
    login,
}