import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Menu.module.css'

export default function Menu() {
  const router = useRouter()

  const NavItem = ({ children, href }: {children: any; href: string;}) => {
    return router.pathname === href ?
      (
        <>
          { children }
        </>
      ) :
      (
        <Link href={href}>{children}</Link>
      )
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavItem href="/projects">projects</NavItem>
        </li>
        <li className={styles.li}>
          <NavItem href="/words">words</NavItem>
        </li>
        <li className={styles.li}>
          <NavItem href="/photography">photography</NavItem>
        </li>
      </ul>
    </nav>
  )
}