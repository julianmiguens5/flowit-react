import { useState, useEffect} from 'react';
import { getProducts } from '../asyncprod';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response);
        })
    }, [])

    return (
    <div>
        <h2 className="greeting">{props.greeting}</h2>
        <ItemList products={products}/>
    </div>    
    )
}

export default ItemListContainer