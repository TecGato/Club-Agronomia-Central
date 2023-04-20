const { Router } = require('express');
const { uploadFile } = require('../controllers/uploads/postUploads');

const router = Router();

router.post('/', uploadFile);

module.exports = router;
