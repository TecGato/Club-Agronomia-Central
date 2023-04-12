const { Router } = require("express");
const {
  getTestimonials,
} = require("../controllers/testimonials/getTestimonials.js");

const router = Router();

router.get("/", getTestimonials);

module.exports = router;
