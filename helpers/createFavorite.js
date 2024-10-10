const admin = require('firebase-admin');

// Function to create a new favorite on the server-side
function createFavorite(userId) {
  const newFavorite = {
    userId,
    vacationIds: [],
    createdAt: admin.firestore.Timestamp.fromDate(new Date()), 
  };

  return newFavorite;
}

module.exports = createFavorite;
