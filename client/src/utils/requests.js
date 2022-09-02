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

export const postDogs = (dog, temperaments) => {
    const options = {
        method: 'POST',
        url: 'http://localhost:3001/dogs',
        data: {
            name: dog.name,
            image: dog.image,
            weightMin: dog.weightMin,
            weightMax: dog.weightMax,
            height: `${dog.heightMin} - ${dog.heightMax}`,
            life_span: `${dog.life_spanMin} - ${dog.life_spanMax}`,
            temperaments
        }
    };

    axios.request(options).then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });

}