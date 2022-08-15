import axios from "axios";

export const getAllDogs = () => {
    const dogs = axios.get('http://localhost:3001/dogs');
    return dogs;
};

export const getDogByName = (name) => {
    const dog = axios.get(`http://localhost:3001/dogs/${name}`);
    return dog;
};