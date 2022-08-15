import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getDogByName } from '../utils/requests';
import { searchDogs } from '../redux/slices/dogs';
import { useDebounce } from './useDebounce';

export const useSetSearchBar = () => {

    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const debounce = useDebounce(search, 500);

    useEffect(() => {
        if (debounce.length > 0) {
            getDogByName(debounce).then(dogs => {
                dispatch(searchDogs(dogs.data));
            }).catch(err => {
                console.log(err);
            })
        } else {
            dispatch(searchDogs([]));
        }
    }, [debounce]);

    const handleChange = async (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    return [search, handleChange, debounce];
}
