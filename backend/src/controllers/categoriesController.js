const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const category = await prisma.category.create({
            data: {
                name: name
            }
        });
        res.status(201).json({
            message: "Category created successfully",
            category: category
        })
    } catch (err) {
        res.status(500).json({
            message: "Error creating category",
            error: err.message
        });
    }
}

const getCategories = async (req, res) => {
    const categories = await prisma.category.findMany();
    res.status(200).json({
        message: "Categories fetched successfully",
        categories: categories
    });
}

module.exports = {
    createCategory,
    getCategories
}