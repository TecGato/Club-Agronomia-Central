const { Router } = require("express");
const { getAthletes, getById } = require("../controllers/athletes/getAthletes");
const { createAthlete } = require("../controllers/athletes/postAthletes");

const router = Router();

router.get("/", getAthletes);
router.get("/:id", getById);

router.post("/", createAthlete);

module.exports = router;
