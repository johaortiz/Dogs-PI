import React from 'react'
import { Link } from 'react-router-dom'
import styles from './landing.module.css'

export const Landing = () => {
  return (
    <div className={styles.bgImage} >
      <div className={styles.bg}>
        <h1 className={styles.h} >PI-Dogs</h1>
        <Link to="/home">
          <button className={styles.btn} >Go to Home</button>
        </Link>
      </div>
    </div>
  )
}
