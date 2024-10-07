import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemsCard from "./ItemsCard";
import ReactLoading from 'react-loading';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let productsCollection;

    // Verifica si hay categoría seleccionada o no
    if (categoryId) {
      productsCollection = query(collection(db, 'productos'), where('category', '==', categoryId));
    } else {
      productsCollection = collection(db, 'productos');
    }

    // Obtener productos de Firebase
    getDocs(productsCollection)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No hay productos en esta categoría");
        }
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      })
      .finally(() => {
        setLoading(false); // Finaliza la carga
      });
  }, [categoryId]);

  return (
    <div>
      <h1>{categoryId ? `Productos de ${categoryId}` : 'Todos los productos'}</h1>
      <div className="product-grid">
        {loading ? (
          <div className="loading-container">
            <ReactLoading type="spin" color="#000" height={100} width={100} />
          </div>
        ) : (
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
            <h3>No hay productos disponibles</h3>
          )
        )}
      </div>
    </div>
  );
};

export default ProductList;
