import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filters } from "../redux/slices/dogs";


export const useFilter = () => {


    const [select, setSelect] = useState('default');
    const dispatch = useDispatch();

    const sortedsDogs = useSelector(state => state.dogs.sortedsDogs);
    const searchDogs = useSelector(state => state.dogs.searchDogs);


    useEffect(() => {
        filterBy(select);
    }, [sortedsDogs, select, searchDogs]);

    const selected = (event) => {
        const value = event.target.value;
        setSelect(value);
    };

    const filterBy = (value) => {
        if (value === 'api') {
            const filter = sortedsDogs.filter(dog => {
                return dog.id.length < 4
            })
            dispatch(filters(filter));
        } else if (value === 'db') {
            const filter = sortedsDogs.filter(dog => {
                return dog.id.length > 4
            })
            dispatch(filters(filter));
        } else if (value === 'default') {
            dispatch(filters(sortedsDogs));
        }
    }
    return [select, selected];
}
