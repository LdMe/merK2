import fetchData from "./fetch.js";
import { redirect } from "react-router-dom";

async function getAllStands(){
    const stands = await fetchData("/stand")
    if(stands.error && stands.status === 401){
        return redirect("/login");
    }
    return stands;
}


export {
    getAllStands
}