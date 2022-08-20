const axios = require('axios');
const { Dog, Temperament } = require('../db');


//Api----------------------------------------------------------------------------------------------------------------------------------

const getDogsfromApi = async () => {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds');
    const dogs = response.data?.map((dog) => dogsTemplate(dog, dog.image.id));
    return dogs;
};

const getDogsByName = async (name) => {
    const dogsApi = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
    const filterDogsApi = dogsApi.data?.map((dog) => dogsTemplate(dog, dog.reference_image_id));
    const dogsDB = await getDogsByDB();
    const filterDogsDB = dogsDB.filter((dog) => dog.name.toLowerCase().includes(name.toLowerCase()));
    const dogsUnion = [...filterDogsDB, ...filterDogsApi];
    return dogsUnion;
};

const getDogsById = async (id) => {
    const dogs = await getDogs();
    const dog = dogs.find((dog) => dog.id === id);
    return dog;
};


//DB----------------------------------------------------------------------------------------------------------------------------------
const getDogsByDB = async () => {
    const dogsDb = await Dog.findAll({ include: [Temperament] });
    const dogs = dogsDb?.map((dog) => dogsTemplate(dog));
    return dogs;
};




//Union----------------------------------------------------------------------------------------------------------------------------------
const getDogs = async () => {
    const dogs = await getDogsfromApi();
    const dogsDB = await getDogsByDB();
    const dogsUnion = [...dogsDB, ...dogs];
    return dogsUnion;
};


//Template----------------------------------------------------------------------------------------------------------------------------------
const dogsTemplate = (dog, imageDog) => {
    if (dog.id.toString().length < 4) {
        const image = `https://cdn2.thedogapi.com/images/${imageDog}.jpg`;
        const weightTotal = dog.weight.metric.split('-');
        let weightMin;
        let weightMax;
        //REFACTORIZAR
        if (weightTotal.length > 1) { //si hay un rango de peso
            const first = parseInt(weightTotal[0]);
            const second = parseInt(weightTotal[1]);
            if (!isNaN(first) && !isNaN(second)) { //si el primer valor es un numero y el segundo es un numero
                weightMin = first;
                weightMax = second;
            } else if (isNaN(first) && !isNaN(second)) { //si el primer valor no es un numero y el segundo es un numero
                weightMin = second;
                weightMax = second;
            } else if (!isNaN(first) && isNaN(second)) { //si el primer valor es un numero y el segundo no es un numero
                weightMin = first;
                weightMax = first;
            } else if (isNaN(first) && isNaN(second)) { //si el primer valor no es un numero y el segundo no es un numero
                weightMin = 7;
                weightMax = 7;
            }
        } else if (weightTotal.length === 1) {
            const first = parseInt(weightTotal[0]);
            if (!isNaN(first)) { //si el primer valor es un numero
                weightMin = first;
                weightMax = first;
            } else if (isNaN(first)) { //si el primer valor no es un numero
                weightMin = 7;
                weightMax = 7;
            }
        } else {
            weightMin = 7;
            weightMax = 7;
        }
    let temperament = dog.temperament ? dog.temperament : 'No-defined';

        const filterDog = {
            id: dog.id.toString(),
            name: dog.name,
            image: image,
            temperament: temperament,
            weightMin,
            weightMax,
            height: dog.height.metric,
            life_span: dog.life_span,
        };
        return filterDog;
    } else {
        const temperament = dog.temperaments.map((temperament) => temperament.name);
        const filterDog = {
            id: dog.id,
            name: dog.name,
            image: dog.image,
            temperament: temperament.join(', '),
            weightMin: dog.weightMin,
            weightMax: dog.weightMax,
            height: dog.height,
            life_span: dog.life_span,
        };
        return filterDog;
    };
};



module.exports = {
    getDogsfromApi,
    getDogs,
    getDogsByName,
    getDogsById,


};