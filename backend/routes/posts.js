const { Router } = require("express");
const getAllPosts = require("../controllers/posts.js");

const router = Router();

router.get("/admin/posts", async (req, res) => {
  const news = await getAllPosts();
  try {
    return res.status(200).json(news);
  } catch (error) {
    return res.status(404).send(error);
  }
});

module.exports = router;
