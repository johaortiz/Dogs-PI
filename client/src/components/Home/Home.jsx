import React from 'react';
import { useSelector } from 'react-redux';
import { BtnsFilters } from '../BtnsFilters/BtnsFilters';
import { Cards } from '../Cards/Cards';
import styles from './Home.module.css';

export const Home = () => {

    //Without search bar
    const dogsList = useSelector(state => state.dogs.listingDogs);
    const page = useSelector(state => state.dogs.dogPage);

    //Whit search bar
    const searchDogs = useSelector(state => state.dogs.searchDogs);
    const dogPageSearch = useSelector(state => state.dogs.dogPageSearch);



    return (
        <div>
            <BtnsFilters />
            <div className={styles.home }> 
                {searchDogs.length > 0 ? dogsList[dogPageSearch]?.map(dogs => {
                    return <Cards key={dogs.id} dog={dogs} />
                }) : dogsList[page]?.map(dogs => {
                    return <Cards key={dogs.id} dog={dogs} />
                })}
            </div>

        </div>
    );
};
