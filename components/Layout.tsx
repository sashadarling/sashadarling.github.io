import Image from 'next/image'

import Footer from './Footer'
import Header from './Header'

import styles from '../styles/Layout.module.css'

export default function Layout({ children }:{children:any}) {
  return (
    <>
      <div className={styles.wrapper}>
        <Image
          alt='Photo from the underside of a highway bridge.' 
          className={styles.backgroundImage}
          fill
          src='/images/IMG_1713.jpeg'
        />
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}