const { Router } = require('express');
const {
    getTestimonials,
    getById,
} = require('../controllers/testimonials/getTestimonials.js');
const {
    deleteTestimonial,
} = require('../controllers/testimonials/deleteTestimonials.js');
const {
    updateTestimonial,
} = require('../controllers/testimonials/updateTestimonials.js');

const router = Router();

////////////////////////////////////////// GET ROUTES ////////////////////////////////////////////////////////

router.get('/', getTestimonials);

router.get('/:id', getById);

////////////////////////////////////////// POST ROUTES ///////////////////////////////////////////////////////

////////////////////////////////////////// PUT ROUTES ////////////////////////////////////////////////////////

router.put('/:id', updateTestimonial);

////////////////////////////////////////// DELETE ROUTES /////////////////////////////////////////////////////

router.delete('/:id', deleteTestimonial);

module.exports = router;
