import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Filters } from '../Filters/Filters';
import { Pagination } from '../Pagination/Pagination';
import { SearchBar } from '../SearchBar/SearchBar';
import { Sorters } from '../Sorters/Sorters';
import { temperamentsSet, selectedTemperamentSet } from '../../redux/slices/dogs';
import { CardSelectedTemperament } from '../CardSelectedTemperament/CardSelectedTemperament';
import { TemperamentsOptions } from '../Filters/TemperamentsOptions';

export const Home = () => {

    const dogsList = useSelector(state => state.dogs.listingDogs);
    const page = useSelector(state => state.dogs.dogPage);
    const searchDogs = useSelector(state => state.dogs.searchDogs);
    const viewDogs = useSelector(state => state.dogs.viewDogsFoundedByName);
    const pageSearch = useSelector(state => state.dogs.dogPageSearch);

    const selectedTemperament = useSelector(state => state.dogs.selectedTemperament);
    const temperaments = useSelector(state => state.dogs.temperaments);

    useEffect(() => {
        
    }, [selectedTemperament])






    return (
        <div>
            <SearchBar />
            <Pagination />
            <Sorters />
            <Filters />
            <TemperamentsOptions />
            {searchDogs.length < 1 ? dogsList[page]?.map(dogs => {
                return <div key={dogs.id} >{dogs.name}</div>
            }) : viewDogs[pageSearch]?.map(dogs => {
                return <div key={dogs.id} >{dogs.name}</div>
            })}
            <div>{selectedTemperament?.map(select => {
                return <CardSelectedTemperament key={select} select={select} />
            })}</div>
        </div>
    )
}
