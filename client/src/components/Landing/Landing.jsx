import React from 'react'
import { Link } from 'react-router-dom'
import styles from './landing.module.css'

export const Landing = () => {
  return (
    <div className={styles.bg} >
        <h1>Landing</h1>
        <Link to="/home">
            <button>Go to Home</button>
        </Link>
    </div>
  )
}
