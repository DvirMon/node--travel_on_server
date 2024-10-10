const { fetchAllPlaces } = require("../services/placesService");

// Controller for fetching all places
exports.getPlaces = async (req, res) => {
  try {
    const places = await fetchAllPlaces();
    res.status(200).send(places);
  } catch (error) {
    res.status(500).send("Error retrieving places");
  }
};
