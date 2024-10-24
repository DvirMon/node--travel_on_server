const { db } = require("../config/firebase");
const COLLECTION_USERS = process.env.FIREBASE_COLLECTION_USERS;

// Function to save the user object to Firestore in the COLLECTION_USERS collection
const saveUserToFirestore = async (user) => {
  try {
    const userDocRef = db.collection(COLLECTION_USERS).doc(user.uid);
    await userDocRef.set(user); // Save the user object to Firestore
  } catch (error) {
    throw new Error("Error saving user to Firestore: " + error.message);
  }
};

// Service method to fetch a user by UID
const getUserById = async (uid) => {
  try {
    const userDoc = await db.collection(COLLECTION_USERS).doc(uid).get();

    if (!userDoc.exists) {
      // throw new Error("User not found");
      return null;
    }

    return userDoc.data(); // Return the user data
  } catch (error) {
    throw new Error("Error retrieving user: " + error.message);
  }
};

const createFirestoreUser = async (user) => {
  try {
    await db.collection(COLLECTION_USERS).doc(user.uid).set(user);
    return { success: true };
  } catch (error) {
    return error;
  }
};

module.exports = { saveUserToFirestore, createFirestoreUser, getUserById };
