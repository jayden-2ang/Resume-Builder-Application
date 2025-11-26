const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const todosRouter = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
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