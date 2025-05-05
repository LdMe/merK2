import { useState,useEffect,useContext,useRef } from "react";
import ProductCard from "../productCard/ProductCard";
import { getAllProducts,deleteProduct } from "../../utils/api/product";
import RouteContext from "../../context/RouteContext";
import './ProductList.css';


function ProductList(){
    const [products,setProducts] = useState([]);
    const {onRouteChange} = useContext(RouteContext);
    const lastProductRef = useRef(null);
    const firstProductRef = useRef(null);
    useEffect(()=>{
        handleLoadProducts();
    },[])
    useEffect(()=>{
        lastProductRef.current.scrollIntoView({behavior: 'smooth'})
    },[products])
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
    const handleScrollToTop= ()=>{
        firstProductRef.current.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <section className="product-list">
            <h1>Productos</h1>
            <section className="product-list--products">
            <div ref={firstProductRef}></div>
            {products.map(product=>{
                return <ProductCard 
                product={product} 
                key={product.product_id} 
                onRemove={handleRemoveProduct}
                /> 
            })
            }
            <button onClick={handleScrollToTop}>Arriba</button>
            <div ref={lastProductRef}></div>
            </section>
        </section>
    )
}

export default ProductList;