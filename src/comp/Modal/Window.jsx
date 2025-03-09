import styles from './Window.css'

export default (showedItem) => {
  return (
    <article>
      <div class={styles.imgContainer}>
        <img src={showedItem.url} />
      </div>
      <section>
        <h1>{showedItem.title}</h1>
        <div class={styles.itemDesc}>{showedItem.desc}</div>
        <h3>{showedItem.price}</h3>
      </section>
    </article>
  )
}
