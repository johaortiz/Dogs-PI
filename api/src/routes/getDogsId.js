const { getDogsById } = require('../controllers/dogsController');
const { Router } = require('express');

const router = Router();

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const dog = await getDogsById(id);
        res.send(dog);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;