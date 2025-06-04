const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json({ message: 'Users Fetched succesfully', data: users });
    } catch (err) {
        res.status(500).json({ message: "Error fetching Users", error: err.message });
    }
}

const createUser = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, age, password } = req.body;
    try {
        const existingUser = await prisma.user.findUnique({ where: { email: email } });
        if (!existingUser) {
            const hashedPassword = await bcrypt.hash(password, 10);
            await prisma.user.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    age: parseInt(age),
                    password: hashedPassword

                }
            });
            res.status(201).json({ message: 'User Created Succesfully' });
        }
        res.status(500).json({ message: 'Email already exists on another account' })
    } catch (err) {
        res.status(500).json({ message: "Error fetching Users", error: err.message });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'Email o contraseña inválidos' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Email o contraseña inválidos' });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Retorna solo los datos necesarios del usuario
        const userData = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            age: user.age,
        };

        return res.status(200).json({
            message: 'Inicio de sesión exitoso',
            token,
            user: userData,
        });
    } catch (err) {
        return res.status(500).json({ message: 'Error al iniciar sesión', error: err.message });
    }
};

const verifyToken = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                phoneNumber: true,
                age: true,
            },
        });

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json({
            valid: true,
            user,
        });
    } catch (err) {
        res.status(500).json({ valid: false, message: 'Error al verificar token', error: err.message });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, phoneNumber, age } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { id: id } });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const updatedUser = await prisma.user.update({
            where: { id: id },
            data: {
                firstName,
                lastName,
                email,
                phoneNumber,
                age: age !== undefined ? parseInt(age) : undefined,
            },
        });

        res.status(200).json({ message: 'Usuario actualizado correctamente', user: updatedUser });
    } catch (err) {
        res.status(500).json({ message: 'Error al actualizar usuario', error: err.message });
    }
};

module.exports = { getUsers, createUser, loginUser, verifyToken, updateUser }