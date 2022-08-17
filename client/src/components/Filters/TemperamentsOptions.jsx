import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments } from '../../utils/requests'
import { selectedTemperamentSet, temperamentsSet } from '../../redux/slices/dogs';

export const TemperamentsOptions = () => {

    const dispatch = useDispatch();
    const selectedTemperament = useSelector(state => state.dogs.selectedTemperament);
    const temperaments = useSelector(state => state.dogs.temperaments);
    const filters = useSelector(state => state.dogs.filters);


    useEffect(() => {
        getTemperaments().then(temperament => {
            dispatch(temperamentsSet(temperament.data));
        })
    }, [])

    useEffect(() => {

        if (selectedTemperament.length === 0) {
            console.log('dispatch(temperamentsFilterSet([]))')
        } else {
            temperamentsFilterSet(selectedTemperament)
        }
    }, [selectedTemperament]);


    const temperamentsFilterSet = (temperamentsSelects) => {
        let filtered = [];
        filters.forEach(dog => {
            temperamentsSelects.forEach((temp, i) => {
                if (manualController(dog, temp, temperamentsSelects)) {
                    if (!filtered.includes(dog)) {
                        filtered.push(dog);
                    };
                };
            });
        });
    }

    const manualController = (dog, temp, i) => {
        if (i.length === 1) {
            if (dog.temperament.includes(temp)) {
                return dog
            } else {
                return false
            }
        } else if (i.length === 2) {
            if (dog.temperament.includes(i[0]) && dog.temperament.includes(i[1])) {
                return dog
            } else {
                return false
            }
        } else if (i.length === 3) {
            if (dog.temperament.includes(i[0]) && dog.temperament.includes(i[1]) && dog.temperament.includes(i[2])) {
                return dog
            } else {
                return false
            }
        }

    }


    const handleChange = (event) => {
        const value = event.target.value;
        dispatch(selectedTemperamentSet(value));
        const filter = temperaments.filter(temperament => {
            return temperament !== value
        })
        dispatch(temperamentsSet(filter));
    }

    return (
        <select onChange={handleChange} value={'temp'}  >
            <option value={'temp'}>Select a Temperament</option>
            {temperaments?.map(temperament => {
                return <option key={temperament} value={temperament}>{temperament}</option>
            })}
        </select>
    )
}
