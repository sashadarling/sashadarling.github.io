import Logo from './Logo'
import Menu from './Menu'
import MenuToggle from './MenuToggle'

export default function Navbar() {  
  return (
    <header>
      <Logo />
      <MenuToggle />
      <Menu />
    </header>
  )
}