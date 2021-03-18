import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import GenerateAllPalate from '../components/GeneratePalate'

import { clientOnly } from '../utils/clientOnly'

export default function Home() {
  const [reFresh, setReFresh] = useState(false);
  const isClient = clientOnly();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {isClient && GenerateAllPalate(100)}
      </main>

      <footer className={styles.footer} onClick={() => setReFresh(reFresh?false:true)}>
        色を変える
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a> */}
      </footer>
    </div>
  )
}
