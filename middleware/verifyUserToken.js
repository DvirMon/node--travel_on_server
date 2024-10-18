const { auth } = require("firebase-admin"); // Firebase Admin SDK
const jwtDecode = require('jwt-decode');

const verifyUserToken = async (req, res, next) => {

  const idToken = req.headers.authorization?.split(" ")[1]; // Extract the token
  

  if (!idToken) {
    return res.status(401).send("Unauthorized: No token provided");
  }

  console.log(idToken)

  try {
    // const decodedToken = await auth.verifyIdToken(idToken); // Verify the token
    const decodedToken = jwtDecode(idToken);

    console.log(decodedToken)

    req.user = decodedToken; // Attach the decoded user information to the request
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    return res.status(403).send("Unauthorized: Invalid token");
  }
};

module.exports = verifyUserToken;
