const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');
const userRoutes = require('./users');

// API routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);

module.exports = router;