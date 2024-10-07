import { useState, useEffect, useContext } from 'react'; 
import { useParams } from 'react-router-dom';
import ItemCount from '../Cart/ItemCount';
import { CartContext } from '../../context/CartContext';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default function ItemDetailView() {
  const [product, setProduct] = useState({});  
  const { id } = useParams();
  const { cart, addItem } = useContext(CartContext); 

  const onAdd = (cantidad) => {
    const productoConCantidad = { ...product, cantidad };
    console.log(productoConCantidad);
    addItem(productoConCantidad); 
  };

  useEffect(() => {
    const db = getFirestore();
    const getProduct = doc(db, 'productos', id);

    getDoc(getProduct).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="item-detail">
          <img src={product.image} alt="" style={{ width: '30%' }} />
          <h2>{product.title}</h2>
          <p>Precio: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <ItemCount price={product.price} stock={product.stock} agregarAlCarrito={onAdd} />
        </div>
      </div>
    </>
  );
}
