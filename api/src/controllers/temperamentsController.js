const axios = require('axios');
const { Temperament } = require('../db');
const { getDogsfromApi } = require('./dogsController');

const getTemperaments = async () => {
    try {

        const temperaments = await Temperament.findAll({ attributes: ['name'] });

        if (temperaments.length < 1) {

            const dogs = await getDogsfromApi();
            const temperament = dogs?.map((dog) => dog.temperament ? dog.temperament : 'No-defined');
            const filterTemperament = [...new Set(temperament.join(',').replace(/ /g, '').split(',').sort())];
            filterTemperament?.map(async (temperament) => await Temperament.findOrCreate({ where: { name: temperament } }));

            return filterTemperament;

        } else {
            const finalTemperaments = temperaments.map((temperament) => temperament.name);
            return finalTemperaments;
        };

    } catch (error) {
        return error;
    }
};



module.exports = {
    getTemperaments
};