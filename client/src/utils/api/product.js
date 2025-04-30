import fetchData from "./fetch.js";

async function getAllProducts(){
    const products = await fetchData("/product")
    return products;
}

async function deleteProduct(id){
    const response = await fetchData(`/product/${id}`,"DELETE")
    return response
}

export {
    getAllProducts,
    deleteProduct
}