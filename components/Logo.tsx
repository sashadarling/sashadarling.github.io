import Link from "next/link";

import styles from '../styles/components/Logo.module.css'

export default function Logo() {
  return (
    <Link href="/" className={styles.a}>
      <h1 className={styles.h1}>sasha stafford</h1>
    </Link>
  )
}