import Image from 'next/image'
import styles from './Hero.module.css'

interface SocialImage {
  src: string
  alt: string
  url: string
}

interface HeroProps {
  social: SocialImage[]
}

const Hero = ({ social }: HeroProps) => {
  return (
    <section data-testid="hero" className={styles.hero}>
      <h1 data-testid="hero-title" className={styles.title}>
        Hello, I'm <span className={styles.name}>Jehiel Martinez</span>
      </h1>
      <h2 data-testid="hero-subtitle" className={styles.title}>
        I am an Electrical and Software Engineer
      </h2>

      <div data-testid="hero-social" className={styles.social}>
        {social.map((el) => (
          <a
            data-testid="hero-social-element"
            target="_blank"
            key={el.alt}
            href={el.url}
            className={styles.link}
          >
            <Image alt={el.alt} src={el.src} height={50} width={50} />
          </a>
        ))}
      </div>
    </section>
  )
}

export default Hero
