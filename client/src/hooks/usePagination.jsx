import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dogsSetter, listDogs, dogPage } from '../redux/slices/dogs';
import { getAllDogs } from '../utils/requests';

export const usePagination = () => {

    const dogsList = useSelector(state => state.dogs.listingDogs);
    const page = useSelector(state => state.dogs.dogPage);

    const dispatch = useDispatch();

    useEffect(() => {
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
    }, []);


    const prev = (e) => {
        e.preventDefault();
        const check = page - 1;
        if (check < 0) {
            return ;
        } else {
            return dispatch(dogPage(page - 1));
        }
    };

    const next = (e) => {
        e.preventDefault();
        const check = page + 1;
        if (check > dogsList.length - 1) {
            return ;
        } else {
            return dispatch(dogPage(page + 1));
        }
    };

  return [prev, next];
}
