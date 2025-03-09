import { useContext } from 'react' // Не забудьте добавить useContext
import styles from './ItemCard.module.css'
import { CartContext } from '../context/CartContext'

export default ({ itemData }) => {
  const { cart, setCart } = useContext(CartContext)

  const handleAddToCart = () => {
    setCart((prevCart) => [...prevCart, itemData])
    console.log(cart)
  }

  return (
    <div
      className={styles.item}
      tabIndex={itemData.id}
      key={itemData.id}
    >
      <article>
        <div
          className={styles.imgContainer}
          style={{ background: itemData.bgColor }}
        >
          <img src={itemData.imgUrl} alt={itemData.title} />
        </div>
        <section>
          <span className={styles.priceContainer}>
            <span className={styles.price}>{itemData.price}₽</span>
          </span>
          <h1>{itemData.title}</h1>
        </section>
        <button
          className={styles.addToCart}
          onClick={handleAddToCart}
        >
          В корзину
        </button>
      </article>
    </div>
  )
}
