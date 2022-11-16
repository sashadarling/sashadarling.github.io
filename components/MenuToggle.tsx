import styles from '../styles/components/MenuToggle.module.css'

export default function MenuToggle() {
  return (
    <input
      className={styles.menuToggle}
      type="checkbox"
      aria-label="open the menu"
    />
  )
}