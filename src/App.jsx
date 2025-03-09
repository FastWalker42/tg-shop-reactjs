import { useEffect, useState } from 'react'
import { CartContext } from './context/CartContext'

import Container from './comp/Container'

export default () => {
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/items.json')
        if (!response.ok) throw new Error('Ошибка загрузки данных')
        const result = await response.json()
        setItems(result.items)
        console.log(result.items)
      } catch (err) {
        console.log(err.message)
      } finally {
        console.log('ended useEffect')
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <main>
          <Container items={items} />
        </main>
      </CartContext.Provider>
    </>
  )
}
