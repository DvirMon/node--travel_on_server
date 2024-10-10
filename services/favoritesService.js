// services/favoritesService.js
const {db} = require("../config/firebase");
const createFavorite = require("../helpers/createFavorite");

// Create a new favorite document
async function createNewFavorite(userId) {
  const favoritesRef = db.collection("favorites");
  const newFavorite = createFavorite(userId); // Assuming a helper function exists
  const docRef = await favoritesRef.add(newFavorite);

  return { ...newFavorite, id: docRef.id };
}

// Load favorites for a specific user
async function loadFavorites(userId) {
  const favoritesRef = db.collection("favorites");
  const snapshot = await favoritesRef.where("userId", "==", userId).get();

  if (snapshot.empty) {
    return null;
  }
  
  
  const doc = snapshot.docs[0];

  const favorite = { ...doc.data(), id: doc.id };

  // Return existing favorite
  return favorite;
}

// Create a new favorite for a user
async function createNewFavorite(userId) {
  const favoritesRef = db.collection("favorites");
  const newFavorite = createFavorite(userId);
  const docRef = await favoritesRef.add(newFavorite);

  // Return the newly created favorite with its ID
  return { ...newFavorite, id: docRef.id };
}

// Update a favorite document
async function updateFavorite(docId, data) {
  const favoriteDocRef = db.collection("favorites").doc(docId);
  await favoriteDocRef.set(data);
}

module.exports = {
  createNewFavorite,
  loadFavorites,
  updateFavorite,
};
