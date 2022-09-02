import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dogsSetter, listDogs, dogPage, dogPageSearch } from '../redux/slices/dogs';
import { getAllDogs } from '../utils/requests';

export const usePagination = () => {


    const filtersTemp = useSelector(state => state.dogs.filtersTemp);

    //Without search bar 
    const dogsList = useSelector(state => state.dogs.listingDogs);
    const page = useSelector(state => state.dogs.dogPage);
    const dispatch = useDispatch();

    //Whit search bar
    const searchDogs = useSelector(state => state.dogs.searchDogs);
    const pageSearch = useSelector(state => state.dogs.dogPageSearch);



    useEffect(() => {
        getAllDogs().then(dogs => {
            dispatch(dogsSetter(dogs.data));
            return dogs.data;
        });
    }, []);

    useEffect(() => {
        let auxDogsList = [];
        for (let i = 0; i < filtersTemp.length; i += 8) {
            auxDogsList.push(filtersTemp.slice(i, i + 8));
        } dispatch(listDogs(auxDogsList));
        if (searchDogs.length < 1) {
            dispatch(dogPageSearch(0));
            if (auxDogsList.length < page) {
                dispatch(dogPage(auxDogsList.length - 1))
            };
        };
        if (searchDogs.length > 1 && auxDogsList.length < pageSearch) {
            dispatch(dogPageSearch(auxDogsList.length - 1));
        };

    }, [filtersTemp, searchDogs]);


    const prev = (e) => {
        e.preventDefault();
        if (searchDogs.length < 1) {
            const check = page - 1;
            if (check < 0) {
                return;
            } else {
                return dispatch(dogPage(page - 1));
            }
        } else if (searchDogs.length > 0) {
            const check = pageSearch - 1;
            if (check < 0) {
                return;
            } else {
                return dispatch(dogPageSearch(pageSearch - 1));
            }
        }
    }

    const next = (e) => {
        e.preventDefault();
        if (searchDogs.length < 1) {
            const check = page + 1;
            if (check > dogsList.length - 1) {
                return;
            } else {
                return dispatch(dogPage(page + 1));
            }
        } else if (searchDogs.length > 0) {
            const check = pageSearch + 1;
            if (check > dogsList.length - 1) {
                return;
            } else {
                return dispatch(dogPageSearch(pageSearch + 1));
            }
        };
    };

    return [prev, next];
}
