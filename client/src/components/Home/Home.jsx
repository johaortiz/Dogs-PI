import React from 'react';
import { useSelector } from 'react-redux';
import { BtnsFilters } from '../BtnsFilters/BtnsFilters';
import { Cards } from '../Cards/Cards';
import { Image } from './Image';
import styles from './Home.module.css';

export const Home = () => {

    //Without search bar
    const dogsList = useSelector(state => state.dogs.listingDogs);
    const page = useSelector(state => state.dogs.dogPage);

    //Whit search bar
    const searchDogs = useSelector(state => state.dogs.searchDogs);
    const dogPageSearch = useSelector(state => state.dogs.dogPageSearch);

    //Checkings
    const search = useSelector(state => state.dogs.searchValue);
    const selectedTemperament = useSelector(state => state.dogs.selectedTemperament)

    return (
        <div>
            <BtnsFilters />
            <div className={(search.length > 1 && searchDogs.length < 1) || (selectedTemperament && dogsList < 1) ? styles.homeI : styles.home}>
                {search.length > 1 && searchDogs.length < 1
                    ? <Image styles={styles} />
                    : selectedTemperament && dogsList < 1 ? <Image styles={styles} /> : searchDogs.length > 0 ? dogsList[dogPageSearch]?.map(dogs => {
                        return <Cards key={dogs.id} dog={dogs} />
                    }) : dogsList[page]?.map(dogs => {
                        return <Cards key={dogs.id} dog={dogs} />
                    })}
            </div>
        </div>
    );
};
