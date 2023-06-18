import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    if ( totalQuantity === 0) {
        return
    }

    return(
        <Link to='/cart'>
            <div className="CartWidget">
                <img src="/cart.png" alt='cart' className='CartImg'/>
                { totalQuantity }
            </div>
        </Link>
    );
}

export default CartWidget