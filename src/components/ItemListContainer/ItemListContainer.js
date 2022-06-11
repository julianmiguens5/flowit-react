import { useState, useEffect} from 'react';
import { getProducts, getProductsByCategory } from '../asyncprod';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {category} = useParams()
    

    useEffect(() => {
        setLoading(true)

        if(!category) {
            getProducts().then(response => {
                setProducts(response);
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductsByCategory(category).then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [category])

    if(loading) {
        return <div className='spinnerContainer'><div className="spinner"></div></div>
    }

    return (
    <div>
        <h2 className="greeting">{props.greeting}</h2>

        {products.length > 0
        ? <ItemList products={products}/>
        : <h2>No hay productos en está categoría</h2>
        }
    </div>    
    )
}

export default ItemListContainer