import { Fragment } from 'react'
import { randomHexColorCode } from '../utils/randomGenerate'

import styles from '../styles/Home.module.css'

const GenerateAllPalate = (amount) => {
  const result = [...Array(amount)].map((_, index) => GeneratePalate())
  return (
    <div className={styles.board}>
      {result}
    </div>
  )
}

const GeneratePalate = () => {
  const colorCode = randomHexColorCode()

  const textStyle = parseInt("0x" + colorCode, 16) <= parseInt("0x" + "aaaaaa", 16) ? styles.text_white : styles.text_black

  const style = {
    backgroundColor: `#${colorCode}`
  }

  return (
    <div
      key={colorCode}
      className={`${styles.palette} ${textStyle}`}
      style={style}
    >
      {`#${colorCode}`}
    </div>
  )
}

export default GenerateAllPalate
