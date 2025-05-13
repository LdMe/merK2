import fetchData from "./fetch.js";

const BASE_URL = "http://localhost:3003";

async function getAllProducts() {
    const products = await fetchData("/product")
    return products;
}

async function getProductById(id) {
    const product = await fetchData(`/product/${id}`)
    return product;
}

async function deleteProduct(id) {
    const response = await fetchData(`/product/${id}`, "DELETE")
    return response
}

async function createProduct(productData) {
    // subir el contenido con formData para que detecte la imagen
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("description", productData.description);
    formData.append("price", productData.price);
    formData.append("stock", productData.stock);
    formData.append("stand_id", productData.stand_id);
    formData.append("image", productData.image);
    console.log("product image",productData.image);
    const response = await fetchData("/product", "POST", formData);
    return response;
}

async function editProduct(productId, productData) {
    const response = await fetchData("/product/" + productId, "PUT", productData);
    return response;
}
function getProductImage(product) {
    const url = BASE_URL + "/images/" + product.image;
    return url
}
export {
    getAllProducts,
    deleteProduct,
    createProduct,
    getProductById,
    editProduct,
    getProductImage
}