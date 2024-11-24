const express = require('express');
const router = express.Router();
const axios = require('axios');

// Function to fetch weather data by city name
async function getWeatherByCity(city) {
  const API_KEY = process.env.WEATHER_API_KEY;
  const BASE_URL = process.env.BASE_URL;

  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    console.log('Weather API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching weather data for city "${city}":`, error.response?.data || error.message);
    throw new Error('Failed to fetch weather data');
  }
}

// Get weather by city name
router.get('/:city', async (req, res) => {
  const city = req.params.city;
  console.log(city);

  if (!city) {
    return res.status(400).json({ error: 'City name is required' });
  }

  try {
    console.log(`Fetching weather for city: ${city}`);
    const weatherData = await getWeatherByCity(city);
    res.json(weatherData);
  } catch (error) {
    console.error(`Error fetching weather data for city "${city}":`, error.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

module.exports = router;