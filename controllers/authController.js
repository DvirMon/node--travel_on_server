// controllers/authController.js
const authService = require("../services/authService");

// Register a new user with email and password
exports.register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await authService.createUserWithEmailAndPassword(
      email,
      password
    );

    res.status(201).json({ user, message: "User created successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Login with email and password
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const userRecord = await authService.signInWithEmailAndPassword(
      email,
      password
    );

    // const user = mapUserRecordToUser(userRecord)

    res.status(200).json({ userRecord, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login with Google
exports.loginWithGoogle = async (req, res) => {
  const { idToken } = req.body;

  if (!idToken) {
    return res.status(400).json({ error: "Google ID token is required" });
  }

  try {
    const userRecord = await authService.loginWithGoogle(idToken);
    res
      .status(200)
      .json({ userId: userRecord.uid, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

