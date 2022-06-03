const Item = ({category, name, img, price })  => {
    return (
        <li className="ItemLi">
            <img className="itemImg" src={img} alt={name} />
            <h5>{category}</h5>
            <p>{name}</p>
            <p>$ {price}</p>
        </li>
    )
}

export default Item