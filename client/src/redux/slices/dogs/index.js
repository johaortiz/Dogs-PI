import { createSlice } from '@reduxjs/toolkit';


export const darkModeSlice = createSlice({
    name: 'dogs',
    initialState: {
        allDogs: [],                    // all dogs in the system
        searchDogs: [],                 // dogs filtered by search
        sortedsDogs: [],                // dogs sorted
        filters: [],                    // filters of dogs
        temperaments: [],               // temperaments of dogs of DB
        selectedTemperament: [],        // selected temperaments of dogs

        listingDogs: [],                // dogs divided in 8
        dogPage: 0,                     // current page of dogs
        viewDogsFoundedByName: [],
        dogPageSearch: 0,


    },
    reducers: {
        dogsSetter: (state, action) => {
            state.allDogs = action.payload;
        },
        listDogs: (state, action) => {
            state.listingDogs = action.payload;
        },
        dogPage: (state, action) => {
            state.dogPage = action.payload;
        },
        searchDogs: (state, action) => {
            state.searchDogs = action.payload;
        },
        viewDogsFoundedByName: (state, action) => {
            state.viewDogsFoundedByName = action.payload;
        },
        dogPageSearch: (state, action) => {
            state.dogPageSearch = action.payload;
        },
        sorteds: (state, action) => {
            state.sortedsDogs = action.payload;
        },
        filters: (state, action) => {
            state.filters = action.payload;
        },
        temperamentsSet: (state, action) => {
            state.temperaments = action.payload;
        },
        selectedTemperamentSet: (state, action) => {
            state.selectedTemperament = [...state.selectedTemperament, action.payload];
        },
        deleteTempretamentSet: (state, action) => {
            state.selectedTemperament = state.selectedTemperament.filter(item => item !== action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { dogsSetter,
    listDogs,
    dogPage,
    searchDogs,
    viewDogsFoundedByName,
    dogPageSearch,
    sorteds,
    filters,
    temperamentsSet,
    selectedTemperamentSet,
    deleteTempretamentSet } = darkModeSlice.actions;

export default darkModeSlice.reducer