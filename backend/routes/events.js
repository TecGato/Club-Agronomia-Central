const { Router } = require('express');
const { check } = require('express-validator');
const { getEvents, getEventById } = require('../controllers/Events/getEvents');
const { postEvent } = require('../controllers/Events/postEvents');
const { putEvent } = require('../controllers/Events/putEvent');
const { deleteEvent } = require('../controllers/Events/deleteEvent');

const router = Router();

router.get('/', getEvents);
router.get('/:id', getEventById);
router.post('/', postEvent);
router.put('/', putEvent);
router.delete('/', deleteEvent);

module.exports = router;
