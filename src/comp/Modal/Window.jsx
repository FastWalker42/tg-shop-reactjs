import styles from './Window.module.css'
import { useModalStore } from '../../store/ModalStore.ts'

export default ({ children }) => {
  const closeModal = useModalStore((state) => state.closeModal())

  return (
    <div className={styles.modal}>
      <div className={styles.backSymbol} onClick={closeModal}>
        <svg
          fill='var(--secondary-color)'
          width='28px'
          height='30px'
          viewBox='0 0 52 52'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M38,52a2,2,0,0,1-1.41-.59l-24-24a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82L16.83,26,39.41,48.59A2,2,0,0,1,38,52Z' />
        </svg>
        Назад
      </div>
      {children}
    </div>
  )
}
