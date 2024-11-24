const express = require('express');
const router = express.Router();
const Location = require('../models/Location'); 

// Get all cities
router.get('/', async (_req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cities' });
  }
});

// Add a new city
router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const newLocation = new Location({ name });
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add city' });
  }
});

// Delete a city
router.delete('/:id', async (req, res) => {
  try {
    await Location.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'City deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete city' });
  }
});


module.exports = router;
