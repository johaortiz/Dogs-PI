import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dogsSetter, listDogs, dogPage, viewDogsFoundedByName, dogPageSearch } from '../redux/slices/dogs';
import { getAllDogs } from '../utils/requests';

export const usePagination = () => {

    //Without search bar 
    const dogsList = useSelector(state => state.dogs.listingDogs);
    const page = useSelector(state => state.dogs.dogPage);
    const dispatch = useDispatch();

    //Whit search bar
    const searchDogs = useSelector(state => state.dogs.searchDogs);
    const pageSearch = useSelector(state => state.dogs.dogPageSearch);
    const viewDogs = useSelector(state => state.dogs.viewDogsFoundedByName);


    useEffect(() => {
        if (searchDogs.length < 1) {
            getAllDogs().then(dogs => {
                dispatch(dogsSetter(dogs.data));
                return dogs.data;
            }).then((dogs) => {
                let auxDogsList = [];
                for (let i = 0; i < dogs.length; i += 8) {
                    auxDogsList.push(dogs.slice(i, i + 8));
                }
                dispatch(listDogs(auxDogsList));
            });
        }
    }, []);


    useEffect(() => {
        if (searchDogs.length > 1) {
            let auxDogsList = [];
            for (let i = 0; i < searchDogs.length; i += 8) {
                auxDogsList.push(searchDogs.slice(i, i + 8));
            }
            dispatch(viewDogsFoundedByName(auxDogsList));
        } else {
            dispatch(dogPageSearch(0));
        }
    }, [searchDogs]);



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
            if (check > viewDogs.length - 1) {
                return;
            } else {
                return dispatch(dogPageSearch(pageSearch + 1));
            }
        };
    };

    return [prev, next];
}
