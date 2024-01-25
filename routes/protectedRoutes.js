// routes/protectedRoutes.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');

router.use(verifyToken);

// Implement routes that require authentication
// ...

module.exports = router;
