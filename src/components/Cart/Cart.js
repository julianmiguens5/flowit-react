import React from 'react'
import { useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

export const Cart = () => {
    const { cart, getTotal, clearCart } = useContext(CartContext) 
    
    let total = getTotal();

    return (     
        <div>
            <h1>Carrito</h1>
            <div className='container'>
                <div className='row'>
                    { cart.map(prod => <CartItem key={prod.id} {...prod}/> ) }
                    <h3>{ total>0 ? `$ ${total}` : "No hay productos en el carrito" }</h3>
                    <div className='btn-group'>
                        <button className="btn btn-danger" onClick={clearCart}>Limpiar carrito</button>
                        <button className="btn btn-primary">Terminar compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
