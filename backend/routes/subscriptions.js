const { Router } = require("express");
const {
  getAllSubscriptions,
} = require("../controllers/subscriptions/getSubscriptions");
const {
  createSubscription,
} = require("../controllers/subscriptions/postSubscriptions");
const {
  updateSubscription,
} = require("../controllers/subscriptions/putSubscriptions");

const router = Router();

router.get("/", getAllSubscriptions);
router.post("/", createSubscription);
router.put("/:id", updateSubscription);

module.exports = router;
