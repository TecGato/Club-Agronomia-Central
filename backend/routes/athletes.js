const { Router } = require('express');
const { getAthletes, getById } = require('../controllers/athletes/getAthletes');
const { createAthlete } = require('../controllers/athletes/postAthletes');
const { updateAthlete } = require('../controllers/athletes/putAthletes');
const { deleteById } = require('../controllers/athletes/deleteAthletes');

const router = Router();

router.get('/', getAthletes);
router.get('/:id', getById);
router.post('/', createAthlete);
router.put('/:id', updateAthlete);
router.delete('/:id', deleteById);

module.exports = router;
