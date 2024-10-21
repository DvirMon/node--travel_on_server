const { db } = require("../config/firebase");
const mapToDate = require("../helpers/mapToDate");
const {
  setPaginationQuery,
  setPaginationResponse,
  getLastVisible,
  getTotalPlacesCount,
} = require("../helpers/pagination");

const COLLECTION_VACATIONS = process.env.FIREBASE_COLLECTION_VACATIONS;

// Service to interact with Firestore
exports.fetchAllPlaces = async () => {
  try {
    const placesSnapshot = await db.collection(COLLECTION_VACATIONS).get();

    // Include the document ID in each place object
    const places = mapPlacesSnapshot(placesSnapshot);

    return places;
  } catch (error) {
    throw new Error("Error fetching places");
  }
};

// Fetches documents with optional pagination
exports.fetchPaginatedPlaces = async (
  limit = 10,
  startAfterId = null,
  orderByField = "createdAt",
  orderDirection = "asc",
) => {
  try {
    // set the query with dynamic orderBy
    const query = await setPaginationQuery(
      limit,
      startAfterId,
      orderByField,
      orderDirection
    );

    if (!query) {
      throw new Error("Invalid startAfterId: Document not found.");
    }

    // Fetch the results from Firestore
    const placesSnapshot = await query.get();

    // Transform Firestore docs to places array
    const places = mapPlacesSnapshot(placesSnapshot);

    // Get pagination info (lastVisible)
    const lastVisible = getLastVisible(placesSnapshot);

    const pagination = setPaginationResponse(places, lastVisible, limit);

    return pagination;
  } catch (error) {
    return error;
  }
};

exports.fetchTotalPlacesCount = async () => {
  try {
    const countSnapshot = await db
      .collection(COLLECTION_VACATIONS)
      .count()
      .get();
    return countSnapshot.data().count; // Returns the total document count
  } catch (error) {
    return error;
  }
};


// Helper to map Firestore snapshot to places array
const mapPlacesSnapshot = (placesSnapshot) => {
  return placesSnapshot.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((place) => mapToDate(place)); // Assume mapToDate handles date formatting
};
