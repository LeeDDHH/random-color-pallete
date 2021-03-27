import HeadComponent from '../components/HeadComponent'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import GenerateAllPalate from '../components/GeneratePalate'

import { clientOnly } from '../utils/clientOnly'

export default function Home() {
  const [reFresh, setReFresh] = useState(false);
  const isClient = clientOnly();
  return (
    <div>
      <HeadComponent />

      <header className={styles.header} onClick={() => setReFresh(reFresh?false:true)}>
        色を変える
      </header>

      <main className={styles.main}>
        {isClient && GenerateAllPalate(100)}
      </main>

      <footer className={styles.footer} onClick={() => setReFresh(reFresh?false:true)}>
        色を変える
      </footer>
    </div>
  )
}
