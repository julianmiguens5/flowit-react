import { useState, useEffect } from "react"
//import { getProductById } from "../asyncprod"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import { doc, getDoc } from "firebase/firestore";
import db from "../../services/firebase";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const {idProd} = useParams()

    useEffect(() => {
        setLoading(true)

        getDoc(doc(db, 'products', idProd)).then(doc => {
            const product = { id: doc.id, ...doc.data()}
            setProduct(product)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        /* getProductById(idProd).then(response => {
            setProduct(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        }) */
    }, [idProd])

    if(loading) {
        return <div className='spinnerContainer'><div className="spinner"></div></div>
    }

    return (
        <>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer