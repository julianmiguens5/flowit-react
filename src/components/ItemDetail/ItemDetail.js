import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({id, name, img, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        addItem({ id, name, price, quantity});
        setQuantityAdded(quantity);
    }

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
                    { quantityAdded === 0 
                    ?  <ItemCount stock={stock} onAdd={handleOnAdd} />
                    :  <Link to='/cart' className='btn btn-success'>Terminar compra</Link>
                    }
                </div>

            </div>
        </div>
    )
}

export default ItemDetail