const { getDogs } = require('../controllers/dogsController');
const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const dogs = await getDogs();
        res.send(dogs);        
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;