import fetchData from "./fetch.js";

async function getAllProducts(){
    const products = await fetchData("/product")
    return products;
}


export {
    getAllProducts
}