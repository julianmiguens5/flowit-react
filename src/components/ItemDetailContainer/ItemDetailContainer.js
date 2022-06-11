import { useState, useEffect } from "react"
import { getProductById } from "../asyncprod"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const {idProd} = useParams()

    useEffect(() => {
        setLoading(true)

        getProductById(idProd).then(response => {
            setProduct(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

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