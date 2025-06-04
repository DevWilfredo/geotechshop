const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getOrderByUserId = async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) return res.status(404).json({ message: 'User not found' });
        const orders = await prisma.order.findMany({
            where: {
                userId: userId
            },
            include: {
                orderItems: {
                    include: { product: true }
                }
            }
        });
        res.status(200).json({ message: 'Orders fetched successfully', orders: orders });
    } catch (err) {
        console.error('Error getting orders:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const createOrder = async (req, res) => {
    const { userId, items } = req.body;

    try {
        // Verificar si el usuario existe
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Crear la orden vacía
        const order = await prisma.order.create({
            data: {
                userId,
                orderItems: {
                    create: items.map((item) => ({
                        productId: item.productId,
                        quantity: item.quantity,
                    }))
                }
            },
            include: {
                orderItems: {
                    include: { product: true }
                }
            }
        });

        return res.status(201).json(order);
    } catch (error) {
        console.error('Error creating order:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { createOrder, getOrderByUserId }