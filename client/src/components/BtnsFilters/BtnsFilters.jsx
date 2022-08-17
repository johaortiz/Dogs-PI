import React from 'react'
import { useSelector } from 'react-redux'
import { CardSelectedTemperament } from '../CardSelectedTemperament/CardSelectedTemperament'
import { Filters } from '../Filters/Filters'
import { TemperamentsOptions } from '../Filters/TemperamentsOptions'
import { Pagination } from '../Pagination/Pagination'
import { SearchBar } from '../SearchBar/SearchBar'
import { Sorters } from '../Sorters/Sorters'

export const BtnsFilters = () => {
    const selectedTemperament = useSelector(state => state.dogs.selectedTemperament);

    return (
        <div>
            <SearchBar />
            <Pagination />
            <Sorters />
            <Filters />
            <TemperamentsOptions />
            <div>
                {selectedTemperament?.map(select => {
                    return <CardSelectedTemperament key={select} select={select} />
                })}
            </div>
        </div>
    )
}
