// routes/favoritesRoutes.js
const express = require('express');
const favoritesController = require('../controllers/favoritesController');

const router = express.Router();

// Define the route to load favorites
router.get('/:userId', favoritesController.getFavorites);

// Define the route to update a favorite document
router.post('/update/:docId', favoritesController.updateFavorite);

module.exports = router;
