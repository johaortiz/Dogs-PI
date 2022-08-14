const { getDogsByName } = require('../controllers/dogsController');
const { Router } = require('express');

const router = Router();

router.get('/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const dogs = await getDogsByName(name);
        res.send(dogs);        
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;