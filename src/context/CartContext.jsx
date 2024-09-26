import { addDoc, collection, getFirestore } from "firebase/firestore"
import { createContext, useState } from "react"

export const CartContext = createContext([])

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [orderId, setOrderId] = useState('')
    const addItem = (item) => {
        setCart([...cart, item])
    }

    const createNewOrder = (order) => {
        const db = getFirestore()
        const orders = collection(db, 'order')

        addDoc(orders, order).then((snapshot) =>{
            setOrderId(snapshot.id)
        })
    }
    
    return (
        <CartContext.Provider value={{cart, setCart, addItem, createNewOrder}}>{children}</CartContext.Provider>
    )
}