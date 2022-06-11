import { useState, useEffect } from "react"
import { getProductById } from "../asyncprod"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    const {idProd} = useParams()

    useEffect(() => {
        getProductById(idProd).then(response => {
            setProduct(response)
        })
    }, [])

    return (
        <>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer