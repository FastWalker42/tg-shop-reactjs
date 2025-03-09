import ItemCard from './ItemCard'
import styles from './Container.module.css'

const Container = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <ItemCard key={item.id} itemData={item} />
      ))}
    </div>
  )
}

export default Container
