const { Router } = require('express');
const { check } = require('express-validator');
const { getEvents, getEventById } = require('../controllers/Events/getEvents');

const router = Router();

router.get('/', getEvents);
router.get('/', getEventById);

module.exports = router;
