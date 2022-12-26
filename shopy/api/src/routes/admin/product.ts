import * as express from 'express';
const router = express.Router();

// Controllers import
import * as productsController from '../../controllers/products';

router.get('/add-product', productsController.addProducts);
router.get('/products', productsController.getAdminProducts);
router.post('/edit-product', productsController.editProduct);
router.post('/register-product', productsController.registerProduct);
router.post('/product/delete', productsController.deleteProduct);
router.get('/edit-product/:productId', productsController.getEditProduct);

export default router;
