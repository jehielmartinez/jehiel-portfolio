import Link from 'next/link'
import styles from './Navbar.module.css'

interface NavbarElement {
  content: string
  linkTo: string
}

interface NavbarProps {
  elements: NavbarElement[];
}

const Navbar = ({ elements }: NavbarProps) => {
  return (
    <nav data-testid='navbar' className={styles.navbar}>
      {elements.map((el: NavbarElement) => (
        <Link key={el.content} href={el.linkTo}>
          <a data-testid='navbar-element' className={styles.navbarElement}>{el.content}</a>
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
