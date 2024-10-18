const usersService = require("../services/usersService");


exports.getUserById = async (req, res) => {
  const { uid } = req?.user;  // UID from the decoded token

  try {
    // Call the service method to fetch user data
    const user = await usersService.getUserById(uid);

    return res.status(200).json(user);  // Return the user data
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


// Create a new user in Firestore
exports.createFirestoreUser = async (req, res) => {
    const { userId, userData } = req.body;
  
    if (!userId || !userData) {
      return res.status(400).json({ error: "UserId and userData are required" });
    }
  
    try {
      await usersService.createFirestoreUser(userId, userData);
      res.status(201).json({ message: "User created in Firestore successfully" });
    } catch (error) {
      res.status(500).json({ error });
    }
  };
  