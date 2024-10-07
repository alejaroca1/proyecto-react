import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'
import { createContext, useState } from 'react'
import Swal from 'sweetalert2'

export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    isInCart: () => {}
})

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [order, setOrder] = useState('')

  const createNewOrder = async (order) => {
    const db = getFirestore();
    const orders = collection(db, 'order')
    
    try {
      const snapshot = await addDoc(orders, order)
      const orderWithId = { id: snapshot.id, ...order }
      setOrder(orderWithId);
      
      const getDocRef = doc(db, 'order', snapshot.id);
      await updateDoc(getDocRef, { orderId: snapshot.id });
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡Algo salió mal!",
          })
    }
  };

  const addItem = (item, quantity) => {
    if (quantity > item.stock) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡No tenemos suficiente stock!",
          });
      return;
    }

    const updatedCart = isInCart(item.id)
      ? cart.map(prod => (prod.id === item.id 
          ? { ...prod, quantity: prod.quantity + quantity > 10 ? prod.quantity : prod.quantity + quantity } 
          : prod))
      : [...cart, { ...item, quantity }];

    setCart(updatedCart);
  };

  const isInCart = (id) => cart.some(prod => prod.id === id);

  const removeItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  const clearAll = () => {
    setCart([]);
    setOrder('');
  };

  return (
    <CartContext.Provider value={{ cart, order, setCart, addItem, removeItem, clearAll, isInCart, createNewOrder }}>
      {children}
    </CartContext.Provider>
  );
}
