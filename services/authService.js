// services/authService.js
const { auth, db } = require('../config/firebase');

const createUserWithEmailAndPassword = async (email, password) => {
  try {
    const userRecord = await auth.createUser({ email, password });
    return userRecord;
  } catch (error) {
    throw new Error('Error creating user: ' + error.message);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userRecord = await auth.getUserByEmail(email);
    // Additional login logic could be added here (token generation, etc.)
    return userRecord;
  } catch (error) {
    throw new Error('Error logging in: ' + error.message);
  }
};

const loginWithGoogle = async (idToken) => {
  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    const uid = decodedToken.uid;
    const userRecord = await auth.getUser(uid);
    return userRecord;
  } catch (error) {
    throw new Error('Error logging in with Google: ' + error.message);
  }
};

const createFirestoreUser = async (userId, userData) => {
  try {
    await db.collection('users').doc(userId).set(userData);
    return { success: true };
  } catch (error) {
    throw new Error('Error creating user in Firestore: ' + error.message);
  }
};

module.exports = {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  loginWithGoogle,
  createFirestoreUser,
};
