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

// Route to get the latest location
router.get('/latest', async (req, res) => {
  try {
    const latestLocation = await Location.findOne().sort({ _id: -1 }); // Get the latest saved location
    if (latestLocation) {
      res.json(latestLocation); // Send the latest location data as JSON
    } else {
      res.status(404).json({ message: 'No locations found' });
    }
  } catch (err) {
    console.error('Error fetching latest location:', err);
    res.status(500).json({ message: err.message });
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
