const { Router } = require('express');
const { check } = require('express-validator');
const { getEvents, getById } = require('../controllers/Events/getEvents');
const { createEvent } = require('../controllers/Events/postEvents');
const { updateEvent } = require('../controllers/Events/putEvents');
const { deleteById } = require('../controllers/Events/deleteEvents');
const {
  validateEventAvailability,
} = require('../middlewares/events/validate-event-availability');

const router = Router();

router.get('/', getEvents);
router.get('/:id', getById);
router.post('/', [validateEventAvailability], createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteById);

module.exports = router;
