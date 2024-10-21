const {
  fetchAllPlaces,
  fetchPaginatedPlaces,
  fetchTotalPlacesCount,
} = require("../services/placesService");

// Controller for fetching all places
exports.getPlaces = async (req, res) => {
  try {
    const places = await fetchAllPlaces();
    res.status(200).send(places);
  } catch (error) {
    res.status(500).send("Error retrieving places");
  }
};

// Controller to handle the paginated places request
exports.getPaginatedPlaces = async (req, res) => {
  try {
    // Extract query parameters from the request (with defaults)
    const limit = parseInt(req.query.limit) || 10;
    const startAfterId = req.query.startAfterId || null;
    const orderByField = req.query.orderByField || "createdAt";
    const orderDirection = req.query.orderDirection || "asc";
    const includeCount = req.query.includeCount === "true";

    // Call the service to fetch paginated places
    const data = await fetchPaginatedPlaces(
      limit,
      startAfterId,
      orderByField,
      orderDirection
    );

    const totalCount = includeCount && (await fetchTotalPlacesCount());

    // Return the paginated results
    return res.status(200).json({ ...data, totalCount });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Controller to handle requests for the total places count
exports.getTotalPlacesCount = async (req, res) => {
  try {
    const totalPlacesCount = await fetchTotalPlacesCount();

    // Send the count as the response
    return res.status(200).json(totalPlacesCount);
  } catch (error) {
    return res.status(500).json(error);
  }
};
