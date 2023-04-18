const { Router } = require("express");
const { getMatches } = require("../controllers/matches/getMatches");
const { createMatch } = require("../controllers/matches/postMatches");
const { updateMatch } = require("../controllers/matches/putMatches");
const { deleteById } = require("../controllers/matches/deleteMatches");

const router = Router();

router.get("/", getMatches);
router.post("/", createMatch);
router.put("/:id", updateMatch);
router.delete("/:id", deleteById);

module.exports = router;
