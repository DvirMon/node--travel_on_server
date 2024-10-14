// Method to map userRecord to User interface
function mapUserRecordToUser(userRecord) {

  // Mapping the data from userRecord to User interface
  return {
    userId: userRecord.uid,
    email: userRecord.email,
    emailVerified: userRecord.emailVerified,
    displayName: userRecord.displayName || "N/A", // Handle missing displayName
    photoURL: userRecord.photoURL || "https://example.com/default-avatar.png", // Default if no photoURL
  };
}
module.exports = mapUserRecordToUser

