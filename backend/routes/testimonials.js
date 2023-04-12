const { Router } = require("express");
const {
  getTestimonials,
  getById,
} = require("../controllers/testimonials/getTestimonials.js");

const router = Router();

router.get("/", getTestimonials);

router.get("/:id", getById);

module.exports = router;
