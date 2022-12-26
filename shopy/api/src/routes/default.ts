import express, { Router } from 'express';

const router: Router = express.Router();

// Controllers import
import * as productsController from '../controllers/products';
import * as defaultController from '../controllers/default';

// Controllers middleware
router.get('/products', productsController.getProducts);
router.post('/register-product', productsController.registerProduct);
router.get('/', defaultController.getOverview);

export default router;
