const { Router, response } = require('express');
const { check } = require('express-validator');

const { login, register } = require('../controllers/auth');
const { emailExist } = require('../helpers/db-validators/emailExist');

const router = Router();

router.post('/login', login);
router.post('/register', 
    [
        check('email').custom(emailExist)
    ]
    , register);

module.exports = router;
