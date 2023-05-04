const { Router } = require('express');
const { getUsers } = require('../controllers/users/getUsers');
const { createUser } = require('../controllers/users/postUsers');
const { deleteById } = require('../controllers/users/deleteUsers');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.delete('/:id', deleteById);

module.exports = router;
