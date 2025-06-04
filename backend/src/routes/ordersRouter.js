const {Router} = require('express');
const { createOrder,getOrderByUserId } = require('../controllers/ordersController');
const router = Router();

router.post('/',createOrder);
router.post('/getUserOrders',getOrderByUserId);

module.exports = router