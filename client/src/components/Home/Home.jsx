import React from 'react'
import { useSelector } from 'react-redux'
import { usePagination } from '../../hooks/usePagination';
import { Pagination } from '../Pagination/Pagination';

export const Home = () => {

    const dogsList = useSelector(state => state.dogs.listingDogs);
    const page = useSelector(state => state.dogs.dogPage);

    return (
        <div>
            <Pagination />
            {dogsList[page]?.map(dogs => {
                return <div key={dogs.id} >{dogs.name}</div>
            })}

        </div>
    )
}
