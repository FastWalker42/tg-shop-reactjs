import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const useCart = () => {
  const { cart, setCart } = useContext(CartContext)

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item])
  }

  return { cart, addToCart }
}
