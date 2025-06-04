const { Router } = require('express');
const { getUsers, createUser, loginUser, verifyToken, updateUser } = require('../controllers/usersController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = Router();
const express = require('express');

router.get('/', getUsers);
router.put('/:id', express.urlencoded({extended:true}), updateUser);
router.post('/register',express.urlencoded({extended:true}), createUser);
router.post('/login',express.json(), loginUser);
router.get('/verify-token', authenticateToken, verifyToken);


module.exports = router