import Image from 'next/image'

import Footer from './Footer'
import Header from './Header'

import styles from '../styles/Layout.module.css'

export default function Layout({ children }:{children:any}) {
  return (
    <>
      <Image
        alt='Photo from the underside of a bridge, over a river.' 
        className={styles.backgroundImage}
        fill
        src='/images/IMG_1713.jpeg'
      />
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}