const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const personalRoutes = require('./routes/personal');
const educationRoutes = require('./routes/education');
const skillRoutes = require('./routes/skill');
const projectRoutes = require('./routes/project');
const workRoutes = require('./routes/work');
const volunteerRoutes = require('./routes/volunteer');

const app = express();
const PORT = process.env.PORT || 5001;
const frontendURL = 'https://resume-builder-application-frontend.onrender.com/';

// Middleware
app.use(cors({
    origin: frontendURL
}));
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Routes placeholder
app.use('/api/personal', personalRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/skill', skillRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/work', workRoutes);
app.use('/api/volunteer', volunteerRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});