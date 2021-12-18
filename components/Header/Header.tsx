import type { NextComponentType } from 'next'
import styles from './Header.module.css'

const Header: NextComponentType = () => {
  return (
    <nav className={styles.navbar}>
      Navbar
    </nav>
  )
}

export default Header
