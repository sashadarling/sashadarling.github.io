import Link from 'next/link'

export default function Navbar() {
  return (
    <header>
      <Link href="/">
        <span className="drop-shadow-md text-Josefin text-lime-400">sasha stafford</span>
      </Link>
      <input
        className="side-menu"
        type="checkbox"
        aria-label="open the menu"
      />
      <nav>
        <ul>
          <li>
            <a href="/projects">projects</a>
          </li>
          <li>
            <a href="/art">art</a>
          </li>
          <li>
            <a href="/words">words</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}