import Logo from './Logo'
import Menu from './Menu'
import MenuToggle from './MenuToggle'

import styles from '../styles/components/Header.module.css'

export default function Header() {  
  return (
    <header className={styles.header}>
      <Logo />
      <MenuToggle />
      <Menu />
    </header>
  )
}