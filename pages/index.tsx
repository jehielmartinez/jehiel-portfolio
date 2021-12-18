import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jehiel Martinez</title>
        <meta name="description" content="Jehiel Martinez Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default Home
