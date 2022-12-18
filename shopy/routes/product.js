const express = require('express');
const router = express.Router();

// Controllers import
const productsController = require('../controllers/products');

router.get('/products', productsController.getProducts);

router.get('/products/view/:productId', productsController.getProduct);
router.get('/products/edit/:productId', productsController.getEditProduct);

module.exports = router;
