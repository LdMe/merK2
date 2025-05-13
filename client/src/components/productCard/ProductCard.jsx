import { Link } from 'react-router-dom';
import { getProductImage } from '../../utils/api/product';
import styles from './ProductCard.module.css';

function ProductCard({ product, onRemove }) {
    console.log(getProductImage(product))
    return (
        <article className={"article product " + styles.card}>
            <section className="product-image">
                <img src={getProductImage(product)} alt={product.name} />
            </section>
            <section className="product-data">
                <h2>{product.name}</h2>
                <p className="product-description">{product.description}</p>
                {product.price ? (
                    <p className="product-price">{product.price}€</p>

                ) : (
                    <p className="product-price">no tiene precio</p>
                )}
                {product.stock && (
                    <p className="product-stock">{product.stock} unidades</p>
                )}
                <p>Stand: {product.stand.name}</p>
            </section>
            <Link to={"/product/" + product.product_id + "/edit"}>
                <button >Editar</button>
            </Link>
            <button onClick={() => onRemove(product.product_id)} >Eliminar</button>
        </article>
    )
}

export default ProductCard;