import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import styles from '../styles/components/MenuToggle.module.css'


export default function MenuToggle() {
  const router = useRouter()

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked)
  }

  useEffect(() => {
    setChecked(false)
  }, [router.asPath])

  return (
    <input
      className={styles.menuToggle}
      type="checkbox"
      checked={checked}
      aria-label="open the menu"
      onChange={handleChange}
    />
  )
}