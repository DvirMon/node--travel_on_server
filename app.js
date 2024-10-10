const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const db = require("./firebase");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/places", async (req, res) => {
  try {
    const placesSnapshot = await db.collection("vacations").get();

    const places = placesSnapshot.docs.map((doc) => doc.data());

    res.status(200).send(places);
  } catch (error) {
    res.status(500).send("Error retrieving users");
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
