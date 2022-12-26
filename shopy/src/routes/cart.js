const express = require('express');
const router = express.Router();

// Controllers import
const cartController = require('../../controllers/cart');

router.post('/cart/add', cartController.addProduct);
router.get('/cart', cartController.getProducts);

module.exports = router;
