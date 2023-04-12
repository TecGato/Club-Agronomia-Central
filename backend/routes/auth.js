const { Router, response } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/auth/login');

const router = Router();

router.post('/login', login);

module.exports = router;
