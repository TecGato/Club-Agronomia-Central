const { Router } = require('express');
const { getAds } = require('../controllers/ads/getAds');
const { createAd } = require('../controllers/ads/postAds');
const { updateAd } = require('../controllers/ads/putAds');
const { deleteById } = require('../controllers/ads/deleteAds');

const router = Router();

router.get('/', getAds);
router.post('/', createAd);
router.put('/:id', updateAd);
router.delete('/:id', deleteById);

module.exports = router;
