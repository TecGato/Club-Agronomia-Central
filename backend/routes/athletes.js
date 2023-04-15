const { Router } = require("express");
const { getAthletes, getById } = require("../controllers/athletes/getAthletes");

const router = Router();

router.get("/", getAthletes);
router.get("/:id", getById);

module.exports = router;
