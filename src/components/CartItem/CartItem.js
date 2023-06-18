import { useContext } from 'react'
import CartContext from '../../context/CartContext'


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
            <section className='ContainerItemCartItem'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                        <p className="ItemHeaderCartItem">
                            {name}
                        </p>
                        </div>
                        <div className='col-2'>
                        <p className="InfoCartItem">
                            Cantidad: {quantity}
                        </p>
                        </div>
                        <div className='col-2'>
                        <p className="InfoCartItem">
                            Precio x Unidad: ${price}
                        </p>
                        </div>
                        <div className='col-2'>
                        <p className="InfoCartItem">
                            Subtotal: ${price * quantity}
                        </p>
                        </div>
                        <div className='col-2'>
                        <button className='btn btn-danger' onClick={() => handleRemove(id)}>Eliminar</button>
                        </div>
                    </div>
                 </div>
                 <hr></hr>
            </section> 
                      
    )
}

export default CartItem