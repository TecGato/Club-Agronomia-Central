const { Router } = require('express');
const { check } = require('express-validator');
const { getEvents, getEventById } = require('../controllers/Events/getEvents');
const { postEvent } = require('../controllers/Events/postEvents');

const router = Router();

router.get('/', getEvents);
router.get('/', getEventById);
router.post('/', postEvent);

module.exports = router;
