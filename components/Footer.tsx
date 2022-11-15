import Image from 'next/image' 

import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>Copyright &copy; {new Date().getFullYear()} Sasha Stafford</p>
    </footer>
  )
}