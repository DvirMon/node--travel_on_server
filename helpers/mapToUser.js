// Method to map userRecord to User interface
function mapUserRecordToUser(userRecord) {
  // Mapping the data from userRecord to User interface
  return {
    uid: userRecord.uid,
    email: userRecord.email,
    emailVerified: userRecord.emailVerified,
    displayName: userRecord.displayName || "N/A", // Handle missing displayName
    photoURL: userRecord.photoURL || "https://example.com/default-avatar.png", // Default if no photoURL
    createdAt: new Date().toISOString(), // Add any additional fields as needed
  };
}
module.exports = mapUserRecordToUser;
