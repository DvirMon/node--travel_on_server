// services/authService.js
const { auth, db } = require("../config/firebase");

const createUserWithEmailAndPassword = async (email, password) => {
  try {
    const userRecord = await auth.createUser({ email, password });
    return userRecord;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userRecord = await auth.getUserByEmail(email);



    
    // signInWithPassword

    // 2. Fetch additional user data from Firestore using the user's UID
    const usersSnapshot = await db
      .collection("users")
      .where("userId", "==", userRecord.uid)
      .get();

    const userDoc = usersSnapshot.docs[0];

    // Check if a matching user document exists
    if (usersSnapshot.empty) {
      throw new Error("User does not exist in Firestore");
    }

    const user = userDoc.data();

    return user;
  } catch (error) {
    console.log(error)
    throw new Error("Error logging in: " + error.message);
  }
};

const loginWithGoogle = async (idToken) => {
  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    const uid = decodedToken.uid;
    const userRecord = await auth.getUser(uid);
    return userRecord;
  } catch (error) {
    throw new Error("Error logging in with Google: " + error.message);
  }
};

const createFirestoreUser = async (userId, userData) => {
  try {
    await db.collection("users").doc(userId).set(userData);
    return { success: true };
  } catch (error) {
    throw new Error("Error creating user in Firestore: " + error.message);
  }
};

module.exports = {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  loginWithGoogle,
  createFirestoreUser,
};
