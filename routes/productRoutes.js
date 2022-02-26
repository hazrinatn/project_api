const { Router } = require('express');
const productController = require('../controllers/productController');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();

router.get('/products/:id', requireAuth, productController.product_get_id);
router.get('/products', requireAuth, productController.product_get);
router.post('/products', requireAuth, productController.product_post);
router.delete('/products/:id', requireAuth, productController.product_delete);
router.put('/products/:id', requireAuth, productController.product_update);

module.exports = router;