const { Router } = require('express');
const { getIncomes } = require('../controllers/incomes/getIncomes');
const { deleteById } = require('../controllers/incomes/deleteIncomes');

const router = Router();

router.get('/', getIncomes);
router.delete('/:id', deleteById);

module.exports = router;
