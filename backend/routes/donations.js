const { Router } = require("express");
const { donation } = require("../controllers/donations/postDonations")
const router = Router();


router.get("/", donation);


module.exports = router;
