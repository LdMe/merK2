import styles from './ProductCard.module.css';

function ProductCard ({product,onRemove}){

    return(
        <article className={"article product "+styles.card}>
            <section className="product-image">
                <img src={product.image} alt={product.name}/>
            </section>
            <section className="product-data">
                <h2>{product.name}</h2>
                <p className="product-description">{product.description}</p>
                {product.price ?(
                    <p className="product-price">{product.price}€</p>

                ):(
                    <p className="product-price">no tiene precio</p>
                )}
                {product.stock && (
                    <p className="product-stock">{product.stock} unidades</p>
                )}
            </section>
            <button onClick={()=>onRemove(product.product_id)} >Eliminar</button>
        </article>
    )
}

export default ProductCard;