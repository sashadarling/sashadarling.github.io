
import Footer from './FooterComponent'
import Navbar from './Navbar'

export default function Layout({ children }:{children:any}) {
  return (
    <>
      <header><Navbar /></header>
      <main>{children}</main>
      <Footer />
    </>
  )
}