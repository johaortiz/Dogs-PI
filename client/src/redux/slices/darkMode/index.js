import { createSlice } from '@reduxjs/toolkit'

export const darkModeSlice = createSlice({
    name: 'changeMode',
    initialState: {
        value: 'dark',
    },
    reducers: {
        changeMode: (state, action) => {
            state.value !== 'dark' ? state.value = 'dark' : state.value = 'light';
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeMode } = darkModeSlice.actions

export default darkModeSlice.reducer