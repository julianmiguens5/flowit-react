const ItemDetail = ({id, name, img, description, price}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <img src={img} alt={name} className="img-fluid"/>
                </div>
                <div className="col-md-7 fichaProd">
                    <h2 className="text-start">{name}</h2>
                    <h3 className="text-start">{description}</h3>
                    <h3 className="text-start">{price}</h3>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail