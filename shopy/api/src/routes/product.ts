import express, { Router } from 'express';

const router: Router = express.Router();

// Controllers import
import * as productsController from '../controllers/products';

router.get('/products', productsController.getProducts);
router.get('/products/view/:productId', productsController.getProduct);
router.get('/products/edit/:productId', productsController.getEditProduct);

export default router;
