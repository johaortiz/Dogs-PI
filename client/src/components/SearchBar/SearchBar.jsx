import React from 'react'
import { useSetSearchBar } from '../../hooks/useSetSearchBar';
import styles from './SearchBar.module.css';

export const SearchBar = () => {

    const [search, handleChange] = useSetSearchBar();

    return (
        < >
            <input
                className={styles.input}
                value={search}
                placeholder="Search a Dog..."
                onChange={handleChange}
            />
        </>
    )
}
