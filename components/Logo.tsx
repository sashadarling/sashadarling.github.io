import Link from "next/link";

import styles from '../styles/Logo.module.css'

export default function Logo() {
  return (
    <Link href="/">
      <h1 className={styles.h1}>sasha stafford</h1>
    </Link>
  )
}