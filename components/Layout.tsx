
import Footer from './Footer'
import Header from './Header'

import styles from '../styles/Layout.module.css'

export default function Layout({ children }:{children:any}) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}