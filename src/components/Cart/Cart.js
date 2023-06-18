import React, { useState } from 'react'
import { useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { useNotification } from "../../notification/Notification"
import { addDoc, collection, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
import db from '../../services/firebase/index'

export const Cart = () => {
    const [loading, setLoading] = useState(false);
    const { cart, getTotal, clearCart } = useContext(CartContext) 
    
    let total = getTotal();

    const setNotification = useNotification()

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Address, setAddress] = useState('');
      
    const handleSubmit = event => {
        event.preventDefault();
        document.getElementById("checkOut").style.display = "block";
    };

    const handleCreateOrder = () => {
        setLoading(true);

        const objOrder = {
            buyer: {
                name: Name,
                email: Email,
                phone: Phone,
                address: Address
            },
            items: cart,
            total: total
        }
        
        const batch = writeBatch(db);

        const ids = cart.map(prod => prod.id);

        const OutOfStock = [];

        const collectionRef = collection(db, 'products');

        getDocs(query(collectionRef, where(documentId(),'in', ids)))
            .then(response => {
                console.log(response);
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()

                    const prod = cart.find(prod => prod.id === doc.id)
                    const prodQuantity = prod.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        OutOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
                }).then(() => {
                    if(OutOfStock.length === 0) {
                        const collectionRef = collection(db, 'orders');
                        return addDoc(collectionRef, objOrder);
                    } else {
                        return Promise.reject({ type: 'fuera_stock', products: OutOfStock });
                    }
                }).then(( { id }) => {
                    batch.commit();
                    setNotification('success',`Su orden se genero correctamente. El id de su orden es: ${id}`)
                }).catch(error => {
                    if(error.type === 'fuera_stock') {
                        setNotification('error','Hay productos que no tienen stock')
                    } else {
                        console.log(error);
                    }
                }).finally(() => {
                    setLoading(false)
                    setName('');
                    setEmail('');
                    setPhone('');
                    setAddress('');
                })        
    }
    

    if(loading) {
        return <div className='spinnerContainer'><div className="spinner"></div></div>
    }

    return (     
        <div>
            <h1>Carrito</h1>
            <div className='container'>
                <div className='row'>
                    { cart.map(prod => <CartItem key={prod.id} {...prod}/> ) }
                    <h3>{ total>0 ? `$ ${total}` : "No hay productos en el carrito" }</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='formCompra'>
                        <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder='Nombre'
                        onChange={event => setName(event.target.value)}
                        value={Name}
                        />

                        <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Email'
                        onChange={event => setEmail(event.target.value)}
                        value={Email}
                        />

                        <input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder='Teléfono'
                        onChange={event => setPhone(event.target.value)}
                        value={Phone}
                        />

                        <input
                        id="address"
                        name="address"
                        type="text"
                        placeholder='Domicilio'
                        onChange={event => setAddress(event.target.value)}
                        value={Address}
                        />

                        
                        </div>
                        <button className="btn btn-success btnForm" type="submit">GUARDAR</button>
                    </form>
                    <div className='btn-group'>
                        <button className="btn btn-danger" onClick={clearCart}>Limpiar carrito</button>
                        <button className="btn btn-primary" onClick={handleCreateOrder} id="checkOut" style={{display: "none"}}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart
