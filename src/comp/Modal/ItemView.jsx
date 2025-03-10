import styles from './Window.module.css'

export default ({ itemData }) => {
  return (
    <article className={styles.itemData}>
      <img src={itemData.img} />
    </article>
  )
}
