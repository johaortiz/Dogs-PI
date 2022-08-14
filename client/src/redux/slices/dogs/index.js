import { createSlice } from '@reduxjs/toolkit';


export const darkModeSlice = createSlice({
    name: 'dogs',
    initialState: {
        allDogs: [],
        listingDogs: [],
        dogPage: 0,

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
        }
    },
})

// Action creators are generated for each case reducer function
export const { dogsSetter, listDogs, dogPage } = darkModeSlice.actions

export default darkModeSlice.reducer