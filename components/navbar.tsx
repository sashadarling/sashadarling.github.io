import { useRouter } from 'next/router'
import Logo from './logo'

const MenuToggle = () => {
  return (
    <input
      className="side-menu"
      type="checkbox"
      aria-label="open the menu"
    />
  )
}

const Menu = () => {
  const router = useRouter()

  const NavItem = ({ label, target }: {label: string; target: string;}) => {
    return router.pathname === target ?
      (
        <li>{ label }</li>
      ) :
      (
        <li>
          <a href={target}>{label}</a>
        </li>
      )
  }

  return (
    <nav>
      <ul>
        <NavItem label="projects" target="/projects" />
        <NavItem label="art" target="/art" />
        <NavItem label="words" target="/words" />
      </ul>
    </nav>
  )
}

export default function Navbar() {  
  return (
    <>
      <Logo />
      <MenuToggle />
      <Menu />
    </>
  )
}