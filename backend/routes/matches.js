const { Router } = require('express');
const { getMatches } = require('../controllers/matches/getMatches');
const { createMatch } = require('../controllers/matches/postMatches');
const { updateMatch } = require('../controllers/matches/putMatches');

const router = Router();

router.get('/', getMatches);
router.post('/', createMatch);
router.put('/:id', updateMatch);

module.exports = router;
