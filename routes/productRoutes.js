const { Router } = require('express');
const productController = require('../controllers/productController');

const router = Router();

router.get('/products/:id', productController.product_get_id);
router.get('/products', productController.product_get);
router.post('/products', productController.product_post);
router.delete('/products/:id', productController.product_delete);
router.put('/products/:id', productController.product_update);

module.exports = router;