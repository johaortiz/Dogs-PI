import React from 'react';
import { BtnDelete } from './BtnDelete';
import styles from './CardSelected.module.css';


export const CardSelectedTemperament = ({ select }) => {


    return (
        <span className={styles.ul} >
            {select} <BtnDelete select={select} />
        </span>
    )
}
