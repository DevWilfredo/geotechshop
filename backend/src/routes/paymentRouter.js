const express = require('express');
const {
  handleStripePayment,
  stripeWebhook
} = require('../controllers/paymentController');

const router = express.Router();

// Ruta para iniciar pago
router.post('/', express.json(), handleStripePayment);

// Webhook de Stripe (usa express.raw)
router.post('/webhook', express.raw({ type: 'application/json' }), stripeWebhook);

module.exports = router;
