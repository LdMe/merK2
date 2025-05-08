import { useState, useEffect, useContext, useRef } from "react";
import { useLoaderData, useSearchParams, Outlet, Link } from "react-router-dom";

import ProductCard from "../../../components/productCard/ProductCard";
import SearchFilter from "../../../components/searchFilter/SearchFilter";
import { getAllProducts, deleteProduct } from "../../../utils/api/product";
import RouteContext from "../../../context/RouteContext";
import './ProductList.css';


function ProductList() {
    const defaultProducts = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState(defaultProducts);
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || "");
    const lastProductRef = useRef(null);
    const firstProductRef = useRef(null);
    // useEffect(()=>{
    //     handleLoadProducts();
    // },[])
    useEffect(() => {
        console.log("products", products);
    }, [products])

    const handleRemoveProduct = async (product_id) => {
        const response = await deleteProduct(product_id);
        console.log("delete", response)
        if (response.error) {
            // podemos mostrar que ha habido un error.
        } else {
            const newProducts = products.filter(product => product.product_id !== product_id);
            setProducts(newProducts);
        }
    }
    const handleScrollToTop = () => {
        //firstProductRef.current.scrollIntoView({behavior: 'smooth'})
    }
    const handleSearchTerm = (newTerm) => {
        setSearchTerm(newTerm);
        setSearchParams(params => {
            params.set("search", newTerm);
            return params;
        })

    }
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
        <section className="product-list">
            <Outlet />
            <h1>Productos</h1>
            <Link to="/product/new">Nuevo producto</Link>
            <SearchFilter onSearch={handleSearchTerm} />
            <section className="product-list--products">
                <div ref={firstProductRef}></div>
                {filteredProducts.map(product => {
                    return (
                        <Link to={"/product/"+product.product_id} key={product.product_id}>
                            <ProductCard
                                product={product}
    
                                onRemove={handleRemoveProduct}
                            />
                        </Link>
                    )
                })
                }
                <button onClick={handleScrollToTop}>Arriba</button>
                <div ref={lastProductRef}></div>
            </section>
        </section>
    )
}

export default ProductList;