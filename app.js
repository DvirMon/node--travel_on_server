const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const middlewares = require("./middleware");
const errorHandler = require("./middleware/errorHandler");

const authRoutes = require('./routes/authRoutes');
const placesRoutes = require("./routes/placesRoutes");
const favoritesRoutes = require('./routes/favoritesRoutes');

const app = express();

app.use(middlewares);

// Use the auth routes
app.use('/api/auth', authRoutes);

// Use the places routes
app.use("/api/places", placesRoutes);

// Use the favorites routes
app.use('/api/favorites', favoritesRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

// Use global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
