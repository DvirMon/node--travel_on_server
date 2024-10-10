// services/favoritesService.js
const db = require('../config/firebase');

// Create a new favorite document
async function createNewFavorite(userId) {
  const favoritesRef = db.collection('favorites');
  const newFavorite = createFavorite(userId); // Assuming a helper function exists
  const docRef = await favoritesRef.add(newFavorite);
  
  return { ...newFavorite, id: docRef.id };
}

// Load favorites for a specific user
async function loadFavorites(userId) {
  const favoritesRef = db.collection('favorites');
  const snapshot = await favoritesRef.where('userId', '==', userId).get();

  if (snapshot.empty) {
    // No favorites, create a new one
    return await createNewFavorite(userId);
  }

  // Return existing favorites
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
}

// Update a favorite document
async function updateFavorite(docId, data) {
  const favoriteDocRef = db.collection('favorites').doc(docId);
  await favoriteDocRef.set(data);
}

module.exports = {
  createNewFavorite,
  loadFavorites,
  updateFavorite
};
