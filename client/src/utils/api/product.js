import fetchData from "./fetch.js";

async function getAllProducts(){
    const products = await fetchData("/product")
    return products;
}

async function getProductById(id){
    const product = await fetchData(`/product/${id}`)
    return product;
}

async function deleteProduct(id){
    const response = await fetchData(`/product/${id}`,"DELETE")
    return response
}

async function createProduct(productData){
    const response = await fetchData("/product","POST",productData);
    return response;
}

async function editProduct(productId,productData){
    const response = await fetchData("/product/"+productId,"PUT",productData);
    return response;
}
export {
    getAllProducts,
    deleteProduct,
    createProduct,
    getProductById,
    editProduct
}