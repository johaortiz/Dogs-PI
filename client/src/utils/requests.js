import axios from "axios";

export const getAllDogs = () => {
    const dogs = axios.get('http://localhost:3001/dogs');
    return dogs;
};

export const getDogByName = (name) => {
    const dog = axios.get(`http://localhost:3001/dogs/${name}`);
    return dog;
};

export const getTemperaments = () => {
    const temperament = axios.get('http://localhost:3001/temperaments');
    return temperament;
};

export const getDogById = (id) => {
    const dog = axios.get(`http://localhost:3001/dogs/detail/${id}`);
    return dog;
};