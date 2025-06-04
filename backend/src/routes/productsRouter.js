const { Router } = require('express');
const upload = require('../middlewares/uploadMiddleware');
const { createProduct, getProducts, deleteProductById } = require('../controllers/productsController');

const router = Router();

router.get('/', getProducts);
router.delete('/:id', deleteProductById);
router.post('/', upload.single('image'), createProduct);


module.exports = router;