const { auth } = require("firebase-admin"); // Firebase Admin SDK
const jwtDecode = require("jwt-decode");

const verifyUserToken = async (req, res, next) => {
  const idToken = req.headers.authorization?.split(" ")[1]; // Extract the token

  if (!idToken) {
    return res.status(401).send("Unauthorized: No token provided");
  }

  try {

    req.user = { uid: idToken }; // Attach the decoded user information to the request
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    return res.status(403).send("Unauthorized: Invalid token");
  }
};

module.exports = verifyUserToken;
