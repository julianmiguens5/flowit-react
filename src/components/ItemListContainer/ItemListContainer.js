import { useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

import { getDocs, collection, query, where } from "firebase/firestore";
import db from '../../services/firebase';

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {category} = useParams()
    

    useEffect(() => {
        setLoading(true)

        const collectionRef = category ? (
            query(collection(db, 'products'), where('category', '==', category), where('enabled', '==', true)) 
        ) : collection(db, 'products');

        getDocs(collectionRef).then(response => {
            const productsFromFirebase = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(productsFromFirebase)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        /* if(!category) {
            getProducts().then(response => {
                setProducts(response)
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
        } */


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