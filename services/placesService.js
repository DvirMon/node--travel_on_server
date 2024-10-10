const db = require("../config/firebase");

// Service to interact with Firestore
exports.fetchAllPlaces = async () => {
  try {
    const placesSnapshot = await db.collection("vacations").get();
    return placesSnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    throw new Error("Error fetching places");
  }
};
