import { createSlice } from '@reduxjs/toolkit';


export const darkModeSlice = createSlice({
    name: 'dogs',
    initialState: {
        allDogs: [],
        listingDogs: [],
        dogPage: 0,
        searchDogs: [],
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

    },
})

// Action creators are generated for each case reducer function
export const { dogsSetter,
    listDogs,
    dogPage,
    searchDogs,
    viewDogsFoundedByName,
    dogPageSearch
} = darkModeSlice.actions

export default darkModeSlice.reducer