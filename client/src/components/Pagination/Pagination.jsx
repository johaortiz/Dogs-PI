import React from 'react';
import { useSelector } from 'react-redux';
import { usePagination } from '../../hooks/usePagination';
import styles from './Pagination.module.css';

export const Pagination = () => {

    const [prev, next] = usePagination();
    //Without search bar
    const page = useSelector(state => state.dogs.dogPage);

    //With search bar
    const searchDogs = useSelector(state => state.dogs.searchDogs);
    const pageSearch = useSelector(state => state.dogs.dogPageSearch);


    return (
        <div className={styles.div} >
            <button onClick={prev} className={styles.prev}  >Prev</button>
            <label className={styles.label} >{searchDogs.length < 1 ? page + 1 : pageSearch + 1}</label>
            <button onClick={next} className={styles.next}  >Next</button>
        </div>
    );
};
