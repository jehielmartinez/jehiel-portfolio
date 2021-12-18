import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import { navElements, socialImages } from '../config'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jehiel Martinez</title>
        <meta name="description" content="Jehiel Martinez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar elements={navElements} />
      <Hero social={socialImages}/>
      <Footer />
    </>
  )
}

export default Home
