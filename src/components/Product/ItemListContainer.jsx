import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import  {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() =>{
        const db = getFirestore()
        if (categoryId) {
            const productsCollection = query(collection(db, 'productos'), where('category', '==', categoryId))
      
            getDocs(productsCollection).then((snapshot) => {
              if (snapshot.size === 0) {
                return <h3>No hay productos</h3>
              }
              setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
              setLoading(false)
            }).catch(() => {
              setLoading(false)
            });
      
          } else {
            const productsCollection = collection(db, 'productos')
      
            getDocs(productsCollection).then((snapshot) => {
              if (snapshot.size === 0) {
                return <h3>No hay productos</h3>
              }
              setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
              setLoading(false)
            }).catch(() => {
              setLoading(false)
            });
          }
        }, [categoryId])
      
    return(
        <div>
            <h1>todos los productos</h1>
            {
                products.length > 0 ? (
                    products.map((p) =>(
                        <div key={p.id}>
                            <p>nombre: {p.title}</p>
                            <p>Precio: {p.price}</p>
                            <p>stock: {p.stock}</p>
                            <img src={p.image} style={{width:'50%'}} />
                        </div>
                    ))
                ) : (
                    <h3>Cargado</h3>
                )
            }
        </div>
    )
}

export default ProductList