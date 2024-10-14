// routes/authRoutes.js
const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();

// POST: Create a new user in Firestore (optional)
router.post('/create', usersController.createFirestoreUser);

module.exports = router;
