import React from 'react'
import { useSelector } from 'react-redux';
import { useTemperamentsOp } from '../../hooks/useTemperamentsOp';

export const TemperamentsOptions = () => {


    const temperaments = useSelector(state => state.dogs.temperaments);
    const [handleChange] = useTemperamentsOp();

    return (
        <select onChange={handleChange} value={'temp'}  >
            <option value={'temp'}>Select a Temperament</option>
            {temperaments?.map(temperament => {
                return <option key={temperament} value={temperament}>{temperament}</option>
            })}
        </select>
    )
}
