const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getProducts = async (req, res) => {
    const products = await prisma.product.findMany({
        include: {
            category: true,
            characteristics: true,
            options: true,
        }
    });
    res.status(200).json({
        message: "Products fetched successfully",
        products: products
    });
}

const createProduct = async (req, res) => {
    try {
        const {
            title,
            price,
            description,
            categoryId,
            characteristics,
            options,
        } = req.body;

        const image = req.file?.filename;

        const newProduct = await prisma.product.create({
            data: {
                title,
                price: parseFloat(price),
                description,
                image,
                categoryId: parseInt(categoryId),
                characteristics: {
                    create: JSON.parse(characteristics),
                },
                options: {
                    create: JSON.parse(options).map((value) => ({ value })),
                },
            },
        });

        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el producto' });
    }
};

const deleteProductById = async (req, res) => {
    const { id } = req.params;

    try {
        // Verificar si el producto existe
        const product = await prisma.product.findUnique({
            where: { id }
        });

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        // Eliminar primero las relaciones dependientes (en orden correcto)
        await prisma.characteristic.deleteMany({
            where: { productId: id }
        });

        await prisma.productOption.deleteMany({
            where: { productId: id }
        });

        // Luego eliminar el producto
        await prisma.product.delete({
            where: { id }
        });

        res.status(200).json({ message: 'Producto y relaciones eliminadas correctamente' });
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ message: 'Error interno al eliminar el producto' });
    }
};

module.exports = {
    getProducts,
    createProduct,
    deleteProductById
}