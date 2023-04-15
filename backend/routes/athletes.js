const { Router } = require("express");

const router = Router();

router.get("/", getAthletes);
router.get("/", getByDiscipline);
router.get("/", getByName);
router.get("/", getById);

module.exports = router;
