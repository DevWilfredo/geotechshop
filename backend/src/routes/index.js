const { Router } = require('express');
const express = require('express')
const productsRouter = require('./productsRouter');
const categoriesRouter = require('./categoriesRouter');
const usersRouter = require('./usersRouter');
const ordersRouter = require('./ordersRouter');
const paymentRouter = require('./paymentRouter');
const authenticateToken = require('../middlewares/authMiddleware');

const router = Router();

router.use('/products',express.json(), productsRouter);
router.use('/categories',express.json(), categoriesRouter);
router.use('/users',express.json(), usersRouter);
router.use('/orders',express.json(), authenticateToken, ordersRouter);

// No proceses JSON aquí, lo hace internamente el router
router.use('/checkout', paymentRouter);

module.exports = router;
