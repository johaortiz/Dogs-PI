import React from 'react'
import { useSelector } from 'react-redux';
import { usePagination } from '../../hooks/usePagination';

export const Pagination = () => {

    const [prev, next] = usePagination();
    const page = useSelector(state => state.dogs.dogPage);
    const pageSearch = useSelector(state => state.dogs.dogPageSearch);
    const searchDogs = useSelector(state => state.dogs.searchDogs);


    return (
        <div >
            <button onClick={(e) => prev(e)}>Prev</button>
            <label>{searchDogs.length < 1 ? page + 1 : pageSearch + 1}</label>
            <button onClick={(e) => next(e)}>Next</button>
        </div>
    )
}
