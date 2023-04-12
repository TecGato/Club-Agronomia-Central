const { Router } = require("express");
const { getPosts } = require("../controllers/posts/getPosts.js");

const router = Router();

router.get("/", getPosts);

module.exports = router;
