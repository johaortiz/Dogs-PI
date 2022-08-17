import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedTemperamentSet, temperamentsSet, filtersTempSet } from "../redux/slices/dogs";
import { getTemperaments } from "../utils/requests";


export const useTemperamentsOp = () => {

    const dispatch = useDispatch();
    const selectedTemperament = useSelector(state => state.dogs.selectedTemperament);
    const searchDogs = useSelector(state => state.dogs.searchDogs);
    const temperaments = useSelector(state => state.dogs.temperaments);
    const filters = useSelector(state => state.dogs.filters);


    useEffect(() => {
        getTemperaments().then(temperament => {
            dispatch(temperamentsSet(temperament.data));
        })
    }, [])

    useEffect(() => {
        if (selectedTemperament.length === 0) {
            dispatch(filtersTempSet(filters));
        } else {
            temperamentsFilterSet(selectedTemperament)
        }
    }, [selectedTemperament, searchDogs, filters]);


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
        dispatch(filtersTempSet(filtered));
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
        } else if (i.length === 4) {
            if (dog.temperament.includes(i[0]) && dog.temperament.includes(i[1]) && dog.temperament.includes(i[2]) && dog.temperament.includes(i[3])) {
                return dog
            } else {
                return false
            }
        } else if (i.length === 5) {
            if (dog.temperament.includes(i[0]) && dog.temperament.includes(i[1]) && dog.temperament.includes(i[2]) && dog.temperament.includes(i[3]) && dog.temperament.includes(i[4])) {
                return dog
            } else {
                return false
            }
        } else if (i.length === 6) {
            if (dog.temperament.includes(i[0]) && dog.temperament.includes(i[1]) && dog.temperament.includes(i[2]) && dog.temperament.includes(i[3]) && dog.temperament.includes(i[4]) && dog.temperament.includes(i[5])) {
                return dog
            } else {
                return false
            }
        } else {
            return false
        };
    }


    const handleChange = (event) => {
        const value = event.target.value;
        dispatch(selectedTemperamentSet(value));
        const filter = temperaments.filter(temperament => {
            return temperament !== value
        })
        dispatch(temperamentsSet(filter));
    }

    return [handleChange];
}
