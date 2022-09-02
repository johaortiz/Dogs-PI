const { Router } = require('express');
const getDogs = require('./getDogs');
const getDogsByName = require('./getDogsByName');
const getDogsId = require('./getDogsId');
const getTemperaments = require('./getTemperaments');
const postDog = require('./postDog');


const router = Router();

router.use('/dogs', getDogs);
router.use('/dogs/', getDogsByName);
router.use('/dogs/detail/', getDogsId);
router.use('/temperaments', getTemperaments);
router.use('/dogs', postDog);

module.exports = router;
