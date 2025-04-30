import fetchData from "./fetch.js";

async function getAllStands(){
    const stands = await fetchData("/stand")
    return stands;
}


export {
    getAllStands
}