require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = global.fetch; 
const weatherRoutes = require('./routes/weatherRoutes');
const locationRoutes = require('./routes/locationRoutes');
const app = express();
const PORT = process.env.PORT || 3000;


//Checking .env
console.log('the ports is: ',process.env.PORT)
console.log('API_KEY:',  process.env.WEATHER_API_KEY);
console.log('mongo:', process.env.MONGODB_URI);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Register Routes
app.use('/api/weather', weatherRoutes);
app.use('/locations', locationRoutes);  
app.use('/locations', weatherRoutes); // Mount the weatherRoutes on /locations

//Connect to DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/weather-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Database connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
