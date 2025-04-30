import { useState,useEffect } from "react";
import ProductCard from "../productCard/ProductCard";
import { getAllProducts,deleteProduct } from "../../utils/api/product";
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
    const handleRemoveProduct = async(product_id)=>{
        const response = await deleteProduct(product_id);
        console.log("delete",response)
        if(response.error){
            // podemos mostrar que ha habido un error.
        }else{
            const newProducts = products.filter(product => product.product_id !== product_id);
            setProducts(newProducts);
        }
    }
    return (
        <section className="product-list">
            <h1>Productos</h1>
            <section className="product-list--products">
            {products.map(product=>{
                return <ProductCard 
                product={product} 
                key={product.product_id} 
                onRemove={handleRemoveProduct}
                /> 
            })
            }
            </section>
        </section>
    )
}

export default ProductList;