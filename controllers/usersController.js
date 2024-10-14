const usersService = require("../services/usersService");


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
  