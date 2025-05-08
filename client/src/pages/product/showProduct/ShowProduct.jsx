import { useLoaderData } from "react-router-dom";
import ProductCard from "../../../components/productCard/ProductCard";

function ShowProduct(){
    const product = useLoaderData();
    if(!product){
        return (
            <p>404 Producto no encontrado</p>
        )
    }
    if(product.error){
        return (
            <p>{product.error}</p>
        )
    }
    return(
        <ProductCard product={product} />
    )
}

export default ShowProduct;