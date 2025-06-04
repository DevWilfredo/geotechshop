const { Router } = require('express');
const router = Router();
const { createCategory, getCategories } = require('../controllers/categoriesController');

router.post('/', createCategory);
router.get('/', getCategories);

module.exports = router;
