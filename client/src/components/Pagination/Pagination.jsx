import React from 'react';
import { useSelector } from 'react-redux';
import { usePagination } from '../../hooks/usePagination';

export const Pagination = () => {

    const [prev, next] = usePagination();
    //Without search bar
    const page = useSelector(state => state.dogs.dogPage);

    //With search bar
    const searchDogs = useSelector(state => state.dogs.searchDogs);
    const pageSearch = useSelector(state => state.dogs.dogPageSearch);


    return (
        <div >
            <button onClick={prev}>Prev</button>
            <label>{searchDogs.length < 1 ? page + 1 : pageSearch + 1}</label>
            <button onClick={next}>Next</button>
        </div>
    );
};
