// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// POST: Register a new user
router.post('/register', authController.register);

// POST: Login a user
router.post('/login', authController.login);

// POST: Login with Google
router.post('/google', authController.loginWithGoogle);

// POST: Create a new user in Firestore (optional)
router.post('/create', authController.createFirestoreUser);

module.exports = router;
