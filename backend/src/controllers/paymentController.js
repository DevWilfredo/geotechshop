const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_KEY);
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 👉 Para crear la sesión de pago
const handleStripePayment = async (req, res) => {
    const { items, userId } = req.body;

    const line_items = items.map((item) => ({
        price_data: {
            currency: "usd",
            product_data: {
                name: item.title,
                images: [`${process.env.SERVER_URL}/uploads/${item.image}`],
            },
            unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items,
            success_url: `${process.env.FRONTEND_URL}/successpayment`,
            cancel_url: `${process.env.FRONTEND_URL}/errorpayment`,
            metadata: {
                userId,
                items: JSON.stringify(
                    items.map(({ id, quantity }) => ({
                        id,
                        quantity,
                    }))
                ),
            }

        });

        res.json({ url: session.url });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 👉 Webhook para escuchar pagos completados y crear la orden
const stripeWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        return res.status(400).send(`Webhook error: ${err.message}`);
    }
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        const userId = session.metadata.userId;
        const items = JSON.parse(session.metadata.items);

        try {
            await prisma.order.create({
                data: {
                    userId,
                    orderItems: {
                        create: items.map((item) => ({
                            productId: item.id,
                            quantity: item.quantity,
                        })),
                    },
                    status: 'COMPLETED'
                },
            });
        } catch (err) {
            res.status(500).json({ error: error.message });
        }
    }

    res.status(200).json({ received: true });
};

module.exports = {
    handleStripePayment,
    stripeWebhook,
};
