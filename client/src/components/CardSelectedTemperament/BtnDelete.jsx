import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectedTemperamentSet, temperamentsSet, deleteTempretamentSet } from '../../redux/slices/dogs';

export const BtnDelete = ({ select }) => {

    const temperaments = useSelector(state => state.dogs.temperaments);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        const value = event.target.id;
        const filter = [...temperaments, value];
        const sort = filter.sort();
        dispatch(temperamentsSet(sort));
        dispatch(deleteTempretamentSet(value));
    }


    return (
        <span id={select} onClick={handleClick} >X</span>
    )
}
