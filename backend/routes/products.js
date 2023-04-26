const { Router } = require('express');
const { getProducts } = require('../controllers/products/getProducts');
const { createProduct } = require('../controllers/products/postProducts');
const { updateProduct } = require('../controllers/products/putProducts');
const { deleteById } = require('../controllers/products/deleteProducts');

const router = Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteById);

module.exports = router;
