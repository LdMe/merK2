import { verifyToken } from "../utils/token.js";

function isLoggedInSession(req,res,next){
    const user  = req.session.user;
    if(!user){
        return res.redirect("/login?error=You+are+not+logged+in")
    }
    // lo ideal sería comprobar en base de datos que el usuario existe
    next();
}
function isLoggedInAPI(req,res,next){
    const authorization  = req.headers.authorization;
    console.log("authorization",authorization);
    if(!authorization){
        res.status(401).json({error:"You shall not pass"});
    }
    let token = authorization.split(" "); // si no hay bearer espacio fallaria
    token = token.pop();
    const result = verifyToken(token);
    console.log("token verified",result);
    if(result){
        req.user = {
            user_id: result.user_id,
            role: result.role
        }
        next();
    }else{
        res.status(401).json({error:"You shall not pass"});
    }
}
async function isSeller(req,res,next){
    const user  = req.session.user;
    if(!user){
        return res.redirect("/login?error=You+are+not+logged+in")
    }
    if(user.role ==="seller"){
        next();
    }else{
        return res.redirect("/login?error=You+are+not+a+seller")
    }
}


export {
    isLoggedInSession,
    isSeller,
    isLoggedInAPI
}