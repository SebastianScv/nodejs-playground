const express = require('express');
const router = express.Router();

// Controllers import
const productsController = require('../../controllers/products');

router.get('/add-product', productsController.addProducts);
router.get('/products', productsController.getAdminProducts);

module.exports = router;
