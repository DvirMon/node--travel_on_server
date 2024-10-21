const express = require("express");
const {
  getPlaces,
  getPaginatedPlaces,
  getTotalPlacesCount,
} = require("../controllers/placesController");

const router = express.Router();

// Define the GET /api/places route
router.get("/", getPlaces);

router.get("/pages", getPaginatedPlaces);

router.get("/count", getTotalPlacesCount);

module.exports = router;
