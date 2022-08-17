import React from 'react';
import { useSelector } from 'react-redux';
import { BtnsFilters } from '../BtnsFilters/BtnsFilters';

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
            {searchDogs.length > 0 ? dogsList[dogPageSearch]?.map(dogs => {
                return <div key={dogs.id} >{dogs.name}</div>
            }) : dogsList[page]?.map(dogs => {
                return <div key={dogs.id} >{dogs.name}</div>
            })}

        </div>
    );
};
