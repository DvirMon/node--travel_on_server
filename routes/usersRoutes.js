// routes/authRoutes.js
const express = require('express');
const usersController = require('../controllers/usersController');
const verifyUserToken = require("../middleware/verifyUserToken")

const router = express.Router();

// POST: Create a new user in Firestore (optional)
router.post('/', usersController.createFirestoreUser);

router.get('/profile', verifyUserToken, usersController.getUserById);

module.exports = router;
