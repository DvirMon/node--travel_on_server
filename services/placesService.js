const db = require("../config/firebase");
const mapToDate = require("../helpers/mapToDate");

// Service to interact with Firestore
exports.fetchAllPlaces = async () => {
  try {
    const placesSnapshot = await db.collection("vacations").get();

    // Include the document ID in each place object
    const places = placesSnapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .map((place) => mapToDate(place));
    return places;
  } catch (error) {
    throw new Error("Error fetching places");
  }
};
