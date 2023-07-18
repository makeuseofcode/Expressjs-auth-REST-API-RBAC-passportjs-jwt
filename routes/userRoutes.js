const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userController');
const { verifyToken } = require('../middleware/auth');

router.post('/api/register', userControllers.registerUser);
router.post('/api/login', userControllers.loginUser);

// Protected route accessible only by users with 'admin' role
router.get('/api/users', verifyToken('admin'), userControllers.getUsers);

module.exports = router;
