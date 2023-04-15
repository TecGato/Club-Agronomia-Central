const { Router } = require("express");
const {
  getDirectors,
  getById,
} = require("../controllers/directors/getDirectors");
const { createDirector } = require("../controllers/directors/postDirectors");
const { updateDirector } = require("../controllers/directors/putDirectors");

const router = Router();

router.get("/", getDirectors);
router.get("/:id", getById);
router.post("/", createDirector);
router.put("/:id", updateDirector);

module.exports = router;
