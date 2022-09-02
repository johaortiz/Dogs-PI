import { createSlice } from '@reduxjs/toolkit';


export const darkModeSlice = createSlice({
    name: 'dogs',
    initialState: {
        allDogs: [],                                // all dogs in the system
        temperaments: [],                           // temperaments of dogs of DB
        searchDogs: [],                             // dogs filtered by search
        //----------------------------------------------------------------------------------------------------------------------
        sortedsDogs: [],                            // dogs sorted
        filters: [],                                // filters of dogs
        filtersTemp: [],                            // filters by user
        //----------------------------------------------------------------------------------------------------------------------
        selectedTemperament: [],                    // selected temperaments by user
        searchValue: '',                            // 
        //----------------------------------------------------------------------------------------------------------------------
        listingDogs: [],                            // dogs divided in 8
        dogPage: 0,                                 // current page of dogs
        dogPageSearch: 0,


    },
    reducers: {
        //-------------------------------------------------Initial---------------------------------------------------------------
        dogsSetter: (state, action) => {
            state.allDogs = action.payload;
        },
        temperamentsSet: (state, action) => {
            state.temperaments = action.payload;
        },
        searchDogs: (state, action) => {
            state.searchDogs = action.payload;
        },
        //----------------------------------------------------------------------------------------------------------------------

        sorteds: (state, action) => {
            state.sortedsDogs = action.payload;
        },
        filters: (state, action) => {
            state.filters = action.payload;
        },
        filtersTempSet: (state, action) => {
            state.filtersTemp = action.payload;
        },
        //----------------------------------------------------------------------------------------------------------------------

        listDogs: (state, action) => {
            state.listingDogs = action.payload;
        },
        dogPage: (state, action) => {
            state.dogPage = action.payload;
        },

        dogPageSearch: (state, action) => {
            state.dogPageSearch = action.payload;
        },

        //-----------------------------------------------------User?------------------------------------------------------------
        selectedTemperamentSet: (state, action) => {
            state.selectedTemperament = [...state.selectedTemperament, action.payload];
        },
        deleteTempretamentSet: (state, action) => {
            state.selectedTemperament = state.selectedTemperament.filter(item => item !== action.payload);
        },
        searchValue: (state, action) => {
            state.searchValue = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { dogsSetter,
    listDogs,
    dogPage,
    searchDogs,
    dogPageSearch,
    sorteds,
    filters,
    temperamentsSet,
    selectedTemperamentSet,
    deleteTempretamentSet,
    filtersTempSet,
    searchValue, } = darkModeSlice.actions;

export default darkModeSlice.reducer