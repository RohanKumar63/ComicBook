const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const comicBookRoutes = require('./routes/comicBooks');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI; // Fetch the URI from environment variables

// Middleware
app.use(express.json());
app.use('/api/comics', comicBookRoutes);

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
