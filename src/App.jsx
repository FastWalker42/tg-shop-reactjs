import { useEffect, useState } from 'react'

import Container from './comp/Container'
import Window from './comp/Modal/Window'

export default () => {
  const [items, setItems] = useState([])

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
      <Window></Window>
      <main>
        <Container items={items} />
      </main>
    </>
  )
}
