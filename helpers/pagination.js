// Example of dynamic orderBy usage
const COLLECTION_VACATIONS = process.env.FIREBASE_COLLECTION_VACATIONS;
const { db } = require("../config/firebase");

const setPaginationQuery = async (
  limit,
  startAfterId,
  orderByField,
  orderDirection
) => {
  let query = db
    .collection(COLLECTION_VACATIONS)
    .orderBy(orderByField, orderDirection)
    .limit(limit);

  if (startAfterId) {
    const startAfterDoc = await db
      .collection(COLLECTION_VACATIONS)
      .doc(startAfterId)
      .get();
    if (startAfterDoc.exists) {
      query = query.startAfter(startAfterDoc);
    } else {
      return null;
    }
  }

  return query;
};

// Helper to get the ID of the last document in the snapshot for pagination
const getLastVisible = (placesSnapshot) => {
  return placesSnapshot.docs.length > 0
    ? placesSnapshot.docs[placesSnapshot.docs.length - 1].id
    : null;
};

// Helper to set the final response object for the client
const setPaginationResponse = (places, lastVisible, limit) => {
  return {
    places,
    total: places.length, // Add total count of returned places
    isLastPage: places.length < limit, // Indicates if there are more pages
    nextPage: lastVisible
      ? `?limit=${limit}&startAfterId=${lastVisible}`
      : null,
  };
};

module.exports = {
  getLastVisible,
  setPaginationQuery,
  setPaginationResponse,
};
