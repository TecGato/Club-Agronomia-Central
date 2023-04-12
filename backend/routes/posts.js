const { Router } = require("express");
const { getPosts, getById } = require("../controllers/posts/getPosts.js");

const router = Router();

router.get("/", getPosts);

router.get("/:id", getById);

module.exports = router;
