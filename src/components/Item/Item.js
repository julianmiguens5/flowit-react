import { Link } from "react-router-dom";

const Item = ({category, name, img, price,id })  => {
    return (
        <Link to={`/detail/${id}`}>
        <li className="ItemLi">
            <img className="itemImg" src={img} alt={name} />
            <h5>{category}</h5>
            <p>{name}</p>
            <p>{price}</p>
            </li>
        </Link>
    )
}

export default Item