const express = require('express');
const connectDB = require('./config/db');
const damageReportRoutes = require('./routes/damageReportRoutes');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/damage-reports', damageReportRoutes);

module.exports = app;
