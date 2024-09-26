import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import  {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"
import ItemsCard from "./ItemsCard"

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
              console.error("Error al obtener los productos")
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
      
        return (
          <div>
            <h1>Todos los productos</h1>
            <div className="product-grid">
              {
                products.length > 0 ? (
                  products.map((product) => (
                    <ItemsCard
                      key={product.id}
                      titulo={product.title}
                      precio={product.price}
                      imagen={product.image}
                      id={product.id}
                      category={product.category}
                    />
                  ))
                ) : (
                  <h3>Cargando productos...</h3>
                )
              }
            </div>
          </div>
        )
      
}

export default ProductList