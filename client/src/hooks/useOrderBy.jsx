import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sorteds } from '../redux/slices/dogs/';

export const useOrderBy = () => {


    const allDogs = useSelector(state => state.dogs.allDogs);
    const searchDogs = useSelector(state => state.dogs.searchDogs);

    const [select, setSelect] = useState('default');

    const dispatch = useDispatch();

    useEffect(() => {
        if (searchDogs.length > 0) {
            dispatch(sorteds(allDogs));
            orderBy(select);
        } else {
            dispatch(sorteds(searchDogs));
            orderBy(select);
        }
    }, [allDogs, searchDogs, select]);


    const selected = (event) => {
        const value = event.target.value;
        setSelect(value);
    };

    const orderBy = (value) => {
        if (searchDogs.length < 1) {
            //WEIGHT MIN ASC
            if (value === 'weightMin-asc') {
                const sort = allDogs.map(dogs => {
                    return dogs.weightMin
                }).sort((a, b) => a - b);
                let newArr = [];
                for (let i = 0; i < sort.length; i++) {
                    allDogs.forEach((dog) => {
                        if (dog.weightMin === sort[i]) {
                            newArr.push(dog)
                        }
                    })
                }
                const finalArr = [...new Set(newArr)];
                dispatch(sorteds(finalArr));
            };
            //WEIGHT MIN DESC
            if (value === 'weightMin-desc') {
                const sort = allDogs.map(dogs => {
                    return dogs.weightMin
                }).sort((a, b) => b - a);
                let newArr = [];
                for (let i = 0; i < sort.length; i++) {
                    allDogs.forEach((dog) => {
                        if (dog.weightMin === sort[i]) {
                            newArr.push(dog)
                        }
                    })
                }
                const finalArr = [...new Set(newArr)];
                dispatch(sorteds(finalArr));
            }
            //WEIGHT MAX ASC
            if (value === 'weightMax-asc') {
                const sort = allDogs.map(dogs => {
                    return dogs.weightMax
                }).sort((a, b) => a - b);
                let newArr = [];
                for (let i = 0; i < sort.length; i++) {
                    allDogs.forEach((dog) => {
                        if (dog.weightMax === sort[i]) {
                            newArr.push(dog)
                        }
                    })
                }
                const finalArr = [...new Set(newArr)];
                dispatch(sorteds(finalArr));
            };
            //WEIGHT MAX DESC
            if (value === 'weightMax-desc') {
                const sort = allDogs.map(dogs => {
                    return dogs.weightMax
                }).sort((a, b) => b - a);
                let newArr = [];
                for (let i = 0; i < sort.length; i++) {
                    allDogs.forEach((dog) => {
                        if (dog.weightMax === sort[i]) {
                            newArr.push(dog)
                        }
                    })
                }
                const finalArr = [...new Set(newArr)];
                dispatch(sorteds(finalArr));
            }
            //NAME ASC
            if (value === 'asc') {
                const sort = allDogs.map(dogs => {
                    return dogs.name
                }).sort((a, b) => a.localeCompare(b));
                let newArr = [];
                for (let i = 0; i < sort.length; i++) {
                    allDogs.forEach((dog) => {
                        if (dog.name === sort[i]) {
                            newArr.push(dog)
                        }
                    })
                }
                const finalArr = [...new Set(newArr)];
                dispatch(sorteds(finalArr));
            }
            //NAME DESC
            if (value === 'desc') {
                const sort = allDogs.map(dogs => {
                    return dogs.name
                }).sort((a, b) => b.localeCompare(a));
                let newArr = [];
                for (let i = 0; i < sort.length; i++) {
                    allDogs.forEach((dog) => {
                        if (dog.name === sort[i]) {
                            newArr.push(dog)
                        }
                    })
                }
                const finalArr = [...new Set(newArr)];
                dispatch(sorteds(finalArr));
            }
            if (value === 'default') {
                dispatch(sorteds(allDogs));
            }


        } else {/////////////////////////////////////////////////////////////////////////////////////////////////////////
            //WEIGHT MIN ASC
            if (value === 'weightMin-asc') {
                const sort = searchDogs.map(dogs => {
                    return dogs.weightMin
                }).sort((a, b) => a - b);
                let newArr = [];
                for (let i = 0; i < sort.length; i++) {
                    searchDogs.forEach((dog) => {
                        if (dog.weightMin === sort[i]) {
                            newArr.push(dog)
                        }
                    })
                }
                const finalArr = [...new Set(newArr)];
                dispatch(sorteds(finalArr));
            };
            //WEIGHT MIN DESC
            if (value === 'weightMin-desc') {
                const sort = searchDogs.map(dogs => {
                    return dogs.weightMin
                }).sort((a, b) => b - a);
                let newArr = [];
                for (let i = 0; i < sort.length; i++) {
                    searchDogs.forEach((dog) => {
                        if (dog.weightMin === sort[i]) {
                            newArr.push(dog)
                        }
                    })
                }
                const finalArr = [...new Set(newArr)];
                dispatch(sorteds(finalArr));
            }
            //WEIGHT MAX ASC
            if (value === 'weightMax-asc') {
                const sort = searchDogs.map(dogs => {
                    return dogs.weightMax
                }).sort((a, b) => a - b);
                let newArr = [];
                for (let i = 0; i < sort.length; i++) {
                    searchDogs.forEach((dog) => {
                        if (dog.weightMax === sort[i]) {
                            newArr.push(dog)
                        }
                    })
                }
                const finalArr = [...new Set(newArr)];
                dispatch(sorteds(finalArr));
            };
            //WEIGHT MAX DESC
            if (value === 'weightMax-desc') {
                const sort = searchDogs.map(dogs => {
                    return dogs.weightMax
                }).sort((a, b) => b - a);
                let newArr = [];
                for (let i = 0; i < sort.length; i++) {
                    searchDogs.forEach((dog) => {
                        if (dog.weightMax === sort[i]) {
                            newArr.push(dog)
                        }
                    })
                }
                const finalArr = [...new Set(newArr)];
                dispatch(sorteds(finalArr));
            }
            //NAME ASC
            if (value === 'asc') {
                const sort = searchDogs.map(dogs => {
                    return dogs.name
                }).sort((a, b) => a.localeCompare(b));
                let newArr = [];
                for (let i = 0; i < sort.length; i++) {
                    searchDogs.forEach((dog) => {
                        if (dog.name === sort[i]) {
                            newArr.push(dog)
                        }
                    })
                }
                const finalArr = [...new Set(newArr)];
                dispatch(sorteds(finalArr));
            }
            //NAME DESC
            if (value === 'desc') {
                const sort = searchDogs.map(dogs => {
                    return dogs.name
                }).sort((a, b) => b.localeCompare(a));
                let newArr = [];
                for (let i = 0; i < sort.length; i++) {
                    searchDogs.forEach((dog) => {
                        if (dog.name === sort[i]) {
                            newArr.push(dog)
                        }
                    })
                }
                const finalArr = [...new Set(newArr)];
                dispatch(sorteds(finalArr));
            }
            if (value === 'default') {
                dispatch(sorteds(searchDogs));
            }
        }
    }

    return [select, selected];
}
