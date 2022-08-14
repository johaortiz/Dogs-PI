import React from 'react'
import { useChangeMode } from '../../hooks/useChangeMode'

import styles from './switch.module.css'

export const SwitchDarkLightMode = () => {

  const [theme, changeModeHandler] = useChangeMode();

  return (
    <button
      className={ theme === 'dark' ? styles.light : styles.dark } onClick={changeModeHandler}>change</button>
  )
}
