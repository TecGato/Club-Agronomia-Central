const { Router } = require('express');
const { check } = require('express-validator');

const { login, register } = require('../controllers/auth');
const { emailExist } = require('../helpers/db-validators/emailExist');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post('/login', login);
router.post('/register', 
    [
        check('email').custom(emailExist),
        validateFields
    ]
    , register);

module.exports = router;
