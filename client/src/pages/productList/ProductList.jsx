import { useState,useEffect,useContext,useRef } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";

import ProductCard from "../../components/productCard/ProductCard";
import SearchFilter from "../../components/searchFilter/SearchFilter";
import { getAllProducts,deleteProduct } from "../../utils/api/product";
import RouteContext from "../../context/RouteContext";
import './ProductList.css';


function ProductList(){
    const defaultProducts  = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();
    const [products,setProducts] = useState(defaultProducts);
    const [searchTerm,setSearchTerm] = useState(searchParams.get('search') || "");
    const lastProductRef = useRef(null);
    const firstProductRef = useRef(null);
    // useEffect(()=>{
    //     handleLoadProducts();
    // },[])
    useEffect(()=>{
        lastProductRef.current.scrollIntoView({behavior: 'smooth'})
    },[products])
    // const handleLoadProducts = async()=>{
    //     const data  = await getAllProducts();
        
    //     setProducts(data);
    // }
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
    const handleSearchTerm = (newTerm)=>{
        setSearchTerm(newTerm);
        setSearchParams(params => {
            params.set("search",newTerm);
            return params;
        })

    }
    const filteredProducts = products.filter(product=> product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
        <section className="product-list">
            <h1>Productos</h1>
            <SearchFilter onSearch={handleSearchTerm}/>
            <section className="product-list--products">
            <div ref={firstProductRef}></div>
            {filteredProducts.map(product=>{
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