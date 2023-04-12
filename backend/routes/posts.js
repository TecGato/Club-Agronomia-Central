const { Router } = require("express");
const getAllPosts = require("../controllers/posts.js");

const router = Router();

router.get("/api/posts", async (req, res) => {
  const allPosts = await getAllPosts();
  try {
    return res.status(200).json(allPosts);
  } catch (error) {
    return res.status(404).send(error);
  }
});

module.exports = router;
