import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return(
        <div className="CartWidget">
            <img src="/cart.png" alt='cart' className='CartImg'/>
            { totalQuantity }
        </div>
    );
}

export default CartWidget