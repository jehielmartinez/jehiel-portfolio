import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import styles from '../styles/Home.module.css'
import { navElements } from '../config'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jehiel Martinez</title>
        <meta name="description" content="Jehiel Martinez Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar elements={navElements}/>
      <main className={styles.main}>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default Home
