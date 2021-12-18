import type { NextComponentType } from 'next'
import styles from './Hero.module.css'

const Hero: NextComponentType = () => {
  return (
    <div className={styles.hero}>
      Hero
    </div>
  )
}

export default Hero
