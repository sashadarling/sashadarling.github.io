import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Menu() {
  const router = useRouter()

  const NavItem = ({ label, target }: {label: string; target: string;}) => {
    return router.pathname === target ?
      (
        <li>{ label }</li>
      ) :
      (
        <li>
          <Link href={target}>{label}</Link>
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