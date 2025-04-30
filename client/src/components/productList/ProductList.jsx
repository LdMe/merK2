import { useState,useEffect } from "react";
import ProductCard from "../productCard/ProductCard";
import { getAllProducts } from "../../utils/api/product";
import './ProductList.css';


function ProductList(){
    const [products,setProducts] = useState([]);
    
    useEffect(()=>{
        handleLoadProducts();
    },[])
    const handleLoadProducts = async()=>{
        const data  = await getAllProducts();
        setProducts(data);
    }
    return (
        <section className="product-list">
            <h1>Productos</h1>
            <section className="product-list--products">
            {products.map(product=>{
                return <ProductCard product={product} key={product.product_id} /> 
            })
            }
            </section>
        </section>
    )
}

export default ProductList;