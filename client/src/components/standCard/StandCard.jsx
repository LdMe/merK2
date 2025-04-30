import './StandCard.css';

function StandCard ({stand}){

    return(
        <article className="article stand">
            
            <section className="stand-data">
                <h2>{stand.name}</h2>
                <p className="stand-size">{stand.size}</p>
                
                {stand.category && (
                    <p className="stand-category">categoría: {stand.category.name}</p>
                )}
            </section>
        </article>
    )
}

export default StandCard;