const { Router } = require("express");

const router = Router();

router.get("/api/testimonials", async (req, res) => {
  const allTestimonials = await getAllTestimonials();
  try {
    res.status(200).json(allTestimonials);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
