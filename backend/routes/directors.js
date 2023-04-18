const { Router } = require("express");
const {
  getDirectors,
  getById,
} = require("../controllers/directors/getDirectors");
const { createDirector } = require("../controllers/directors/postDirectors");
const { updateDirector } = require("../controllers/directors/putDirectors");
const { deleteById } = require("../controllers/directors/deleteDirectors");

const router = Router();

router.get("/", getDirectors);
router.get("/:id", getById);
router.post("/", createDirector);
router.put("/:id", updateDirector);
router.delete("/:id", deleteById);

module.exports = router;
