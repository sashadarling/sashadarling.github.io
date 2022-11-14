import styles from '../styles/MenuToggle.module.css'

export default function MenuToggle() {
  return (
    <input
      className={styles.sideMenu}
      type="checkbox"
      aria-label="open the menu"
    />
  )
}