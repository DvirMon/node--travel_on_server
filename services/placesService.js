const { db } = require("../config/firebase");
const mapToDate = require("../helpers/mapToDate");
const COLLECTION_VACATIONS = process.env.FIREBASE_COLLECTION_VACATIONS;

// Service to interact with Firestore
exports.fetchAllPlaces = async () => {
  try {
    const placesSnapshot = await db.collection(COLLECTION_VACATIONS).get();

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
