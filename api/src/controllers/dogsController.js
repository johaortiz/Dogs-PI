const axios = require('axios');
const { Dog, Temperament } = require('../db');


//Api----------------------------------------------------------------------------------------------------------------------------------

const getDogsfromApi = async () => {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds');
    const dogs = response.data?.map((dog) => dogsTemplate(dog));
    return dogs;
};

const getDogsByName = async (name) => {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
    const dogs = response.data?.map((dog) => dogsTemplate(dog));
    return dogs;
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
const dogsTemplate = (dog) => {
    if (dog.id.toString().length < 4) {
        // dog.id = `${'0'.repeat(4 - dog.id.toString().length)}${dog.id}`;
        const image = !dog.image.id
            ? 'https://thumbs.dreamstime.com/b/dog-error-page-not-found-template-webpage-landing-illustrator-vector-188039604.jpg'
            : `https://cdn2.thedogapi.com/images/${dog.image.id}.jpg`;
        const filterDog = {
            id: dog.id.toString(),
            name: dog.name,
            image: image,
            temperament: dog.temperament,
            weight: dog.weight.metric,
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
            weight: dog.weight,
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