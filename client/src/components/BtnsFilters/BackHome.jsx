import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BackHome.module.css'

export const BackHome = () => {
    return <NavLink to={"/home"} >
        <button className={styles.btn}>..Back to Home</button>
    </NavLink>
};
