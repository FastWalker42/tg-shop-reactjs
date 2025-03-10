import { create } from 'zustand'

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const updatedCart = [...state.cart, item]
      console.log('🛒 Добавлен товар:', item)
      console.log('📦 Новая корзина:', updatedCart)
      return { cart: updatedCart }
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id)
      console.log('❌ Удален товар с id:', id)
      console.log('📦 Новая корзина:', updatedCart)
      return { cart: updatedCart }
    }),
}))
