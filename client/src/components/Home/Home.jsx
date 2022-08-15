import React from 'react'
import { useSelector } from 'react-redux'
import { Filters } from '../Filters/Filters';
import { Pagination } from '../Pagination/Pagination';
import { SearchBar } from '../SearchBar/SearchBar';

export const Home = () => {

    const dogsList = useSelector(state => state.dogs.listingDogs);
    const page = useSelector(state => state.dogs.dogPage);
    const searchDogs = useSelector(state => state.dogs.searchDogs);
    const viewDogs = useSelector(state => state.dogs.viewDogsFoundedByName);
    const pageSearch = useSelector(state => state.dogs.dogPageSearch);


    return (
        <div>
            <SearchBar />
            <Pagination />
            <Filters />
            {searchDogs.length < 1 ? dogsList[page]?.map(dogs => {
                return <div key={dogs.id} >{dogs.name}</div>
            }) : viewDogs[pageSearch]?.map(dogs => {
                return <div key={dogs.id} >{dogs.name}</div>
            })}

        </div>
    )
}
