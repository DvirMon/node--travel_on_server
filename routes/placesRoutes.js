const express = require('express');
const { getPlaces } = require('../controllers/placesController');

const router = express.Router();

// Define the GET /api/places route
router.get('/', getPlaces);

module.exports = router;
