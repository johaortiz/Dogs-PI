import React from 'react'
import { useSelector } from 'react-redux';
import { usePagination } from '../../hooks/usePagination';

export const Pagination = () => {

    const [prev, next] = usePagination();
    const page = useSelector(state => state.dogs.dogPage);


    return (
        <div >
            <button onClick={(e) => prev(e)}>Prev</button>
            <label>{page + 1}</label>
            <button onClick={(e) => next(e)}>Next</button>
        </div>
    )
}
