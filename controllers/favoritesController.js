// controllers/favoritesController.js
const favoritesService = require('../services/favoritesService');

// Controller for fetching favorites
exports.getFavorites = async (req, res) => {
  const { userId } = req.params;
  try {
    const favorites = await favoritesService.loadFavorites(userId);
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load favorites' });
  }
};

// Controller for updating a favorite document
exports.updateFavorite = async (req, res) => {
  const { docId } = req.params;
  const data = req.body;
  try {
    await favoritesService.updateFavorite(docId, data);
    res.status(200).json({ message: 'Favorite updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update favorite' });
  }
};
