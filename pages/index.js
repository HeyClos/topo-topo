import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>topo whore</title>
      </Head>
      <section className={styles.headingMd}>
        <p className={styles.headingLg}>maybe a Ryan Gosling site.</p>
        <p>
          launching sometime maybe
        </p>
        <p>
          stay updated via our <a href="https://twitter.com/topowhore">Twitter</a> and <a href="https://instagram.com/topowhoreco">IG</a>.
        </p>
      </section>
    </>

  )
}
