const axios = require('axios');
const { Router } = require('express');
const { Dog, Temperament } = require('../db');

const router = Router();

router.post('/', async (req, res) => {

    const { name, height, weightMin, weightMax, life_span, image, temperaments } = req.body;

    try {
        const dog = await Dog.findOrCreate({
            where: {
                name,
                height,
                weightMin,
                weightMax,
                life_span,
                image,
            },
        });

        const temperamentDb = await Temperament.findAll({ where: { name: temperaments } });
        dog[0].addTemperament(temperamentDb);

        if (dog[1]) {
            res.status(201).json({
                message: 'Dog created successfully',
                dog: dog[0]
            });
        } else {
            res.status(200).json({
                message: "Can't create dog, already exists",
                dog: dog[0]
            });
        }

    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;