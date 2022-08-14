import { configureStore } from '@reduxjs/toolkit';
import changeModeReducer from './slices/darkMode/index';
import dogsReducer from './slices/dogs/index';


export default configureStore({
    reducer: {
        theme: changeModeReducer,
        dogs: dogsReducer,
    },
})