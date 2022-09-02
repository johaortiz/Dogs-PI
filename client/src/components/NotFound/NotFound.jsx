import React from 'react';
import { NavLink } from 'react-router-dom';
import not404 from '../../assets/404.png';
import styles from './NotFound.module.css';


export const NotFound = () => {
    return (
        <div className={styles.container} >
            <img src={not404} alt='Error 404, Page not Found :(' className={styles.img} />
            <NavLink to={'/'}><button className={styles.btn} >Back to Dogs?</button></NavLink>
        </div>
    )
}
