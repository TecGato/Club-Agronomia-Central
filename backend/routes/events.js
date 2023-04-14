const { Router } = require('express');
const { check } = require('express-validator');
const { getEvents, getEventById } = require('../controllers/Events/getEvents');
const { postEvent } = require('../controllers/Events/postEvents');
const { putEvent } = require('../controllers/Events/putEvent');
const { deleteEvent } = require('../controllers/Events/deleteEvent');
const {
    validateEventAvailability,
} = require('../middlewares/events/validate-event-availability');

const router = Router();

router.get('/', getEvents);
router.get('/:id', getEventById);
router.post('/', [validateEventAvailability], postEvent);
router.put('/', putEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
