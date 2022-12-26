const express = require('express');

const router = express.Router();

// Controllers import
const productsController = require('../controllers/products');
const defaultController = require('../controllers/default');

// Controllers middleware
router.get('/products', productsController.getProducts);
router.post('/register-product', productsController.registerProduct);
router.get('/', defaultController.getOverview);

module.exports = router;
