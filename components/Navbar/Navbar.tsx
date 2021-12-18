import type { NextComponentType } from 'next'
import styles from './Navbar.module.css'

const Navbar: NextComponentType = () => {
  return (
    <nav className={styles.navbar}>
      Navbar
    </nav>
  )
}

export default Navbar
