// routes/userRoutes.js
import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// Search users by name
router.get('/search', async (req, res) => {
  const { query } = req.query; // e.g., /search?query=john

  try {
    const results = await User.find({
      name: { $regex: query, $options: 'i' } // 'i' for case-insensitive
    });

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Error searching users' });
  }
});

export default router;
