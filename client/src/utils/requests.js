import axios from "axios";

export const getAllDogs = () => {
    const dogs = axios.get('http://localhost:3001/dogs');
    return dogs;
};