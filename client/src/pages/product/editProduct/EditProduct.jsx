import { useState } from "react";
import { useNavigate,useLoaderData } from "react-router-dom";
import { createProduct, editProduct } from "../../../utils/api/product";
function EditProduct(){
    const {stands,productDataDefault } = useLoaderData();
    const [productData,setProductData] = useState({
        name: productDataDefault.name,
        description: productDataDefault.description,
        price: productDataDefault.price,
        stock: productDataDefault.stock,
        stand_id: productDataDefault.stand_id
    })
    const navigate = useNavigate();
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
        const response = await editProduct(productDataDefault.product_id,productData);
        navigate("/product/"+productDataDefault.product_id,{replace:true});
        console.log(response);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" onChange={handleName} value={productData.name}/>
            <label htmlFor="description">Descripción</label>
            <input type="text" name="description" id="description" onChange={handleDescription} value={productData.description} />
            <label htmlFor="price">Precio</label>
            <input type="number" name="price" id="price" onChange={handlePrice} value={productData.price}/>
            <label htmlFor="stock">Stock</label>
            <input type="number" name="stock" id="stock" onChange={handleStock} value={productData.stock}/>
            <label htmlFor="stand_id">Stand</label>
            <select name="stand_id" id="stand_id" onChange={handleStandId} value={productData.stand_id}>
                {stands.map((stand)=>{
                    return <option value={stand.stand_id}>{stand.name}</option>
                })}
            </select>
            <button>Crear</button>

        </form>
    )
}

export default EditProduct;