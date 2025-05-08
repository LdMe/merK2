import { useState } from "react";
import { useNavigate,useLoaderData } from "react-router-dom";
import { createProduct } from "../../../utils/api/product";
function NewProduct(){
    const [productData,setProductData] = useState({
        name: "",
        description: "",
        price: 0,
        stock: 0,
        stand_id:1
    })
    const stands = useLoaderData();
    const navigate = useNavigate();
    console.log("stands",stands)
    const handleName = (e)=> {
        const newName = e.target.value;
        setProductData((oldProduct)=>{
            return {...oldProduct,name:newName}
        })
    }
    const handleDescription = (e)=> {
        const newDescription = e.target.value;
        setProductData((oldProduct)=>{
            return {...oldProduct,description:newDescription}
        })
    }
    const handlePrice = (e)=> {
        const newPrice = e.target.value;
        setProductData((oldProduct)=>{
            return {...oldProduct,price:newPrice}
        })
    }

    const handleStock = (e)=> {
        const newStock = e.target.value;
        setProductData((oldProduct)=>{
            return {...oldProduct,stock:newStock}
        })
    }
    const handleStandId = (e)=> {
        const newStandId = e.target.value;
        setProductData((oldProduct)=>{
            return {...oldProduct,stand_id:newStandId}
        })
    }
    const handleSubmit =async (e)=>{
        e.preventDefault();
        const response = await createProduct(productData);
        navigate("/product",{replace:true});
        console.log(response);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" onChange={handleName}/>
            <label htmlFor="description">Descripción</label>
            <input type="text" name="description" id="description" onChange={handleDescription} />
            <label htmlFor="price">Precio</label>
            <input type="number" name="price" id="price" onChange={handlePrice}/>
            <label htmlFor="stock">Stock</label>
            <input type="number" name="stock" id="stock" onChange={handleStock} />
            <label htmlFor="stand_id">Stand</label>
            <select name="stand_id" id="stand_id" onChange={handleStandId}>
                {stands.map((stand)=>{
                    return <option value={stand.stand_id}>{stand.name}</option>
                })}
            </select>
            <button>Crear</button>

        </form>
    )
}

export default NewProduct;