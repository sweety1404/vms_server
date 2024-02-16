const express = require('express');
const router = express.Router();
const vendorController = require('../controllers');

// Routes
router.get('/vendors', vendorController.getAllVendors);
// Define other routes for CRUD operations

module.exports = router;
