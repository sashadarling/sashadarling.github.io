import styles from '../styles/MenuToggle.module.css'

export default function MenuToggle() {
  return (
    <input
      className={styles.menuToggle}
      type="checkbox"
      aria-label="open the menu"
    />
  )
}