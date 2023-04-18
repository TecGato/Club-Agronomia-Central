const { Router } = require('express');
const { getPosts, getById } = require('../controllers/posts/getPosts.js');
const { createPost } = require('../controllers/posts/postPosts.js');
const { updatePost } = require('../controllers/posts/putPosts.js');
const { deleteById } = require('../controllers/posts/deletePosts.js');

const router = Router();

router.get('/', getPosts);
router.get('/:id', getById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deleteById);

module.exports = router;
