import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import { CardSelectedTemperament } from '../CardSelectedTemperament/CardSelectedTemperament'
import { Filters } from '../Filters/Filters'
import { TemperamentsOptions } from '../Filters/TemperamentsOptions'
import { Pagination } from '../Pagination/Pagination'
import { SearchBar } from '../SearchBar/SearchBar'
import { Sorters } from '../Sorters/Sorters'
import styles from './BtnsFilters.module.css'

export const BtnsFilters = () => {
    const selectedTemperament = useSelector(state => state.dogs.selectedTemperament);

    return (
        <div>
            <SearchBar />
            <div className={styles.filters} >
                <Sorters />
                <TemperamentsOptions />
                <Filters />
                <NavLink to={'/create'}><button>Create a dog...</button></NavLink>
            </div>
            <span className={styles.selected}>
                
                {selectedTemperament?.map(select => {
                    return <CardSelectedTemperament key={select} select={select} />
                })}
            </span>
            <Pagination />
        </div>
    )
}
