
import Footer from './FooterComponent'
import Navbar from './Navbar'

import styles from './Layout.module.css'

export default function Layout({ children }:{children:any}) {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}