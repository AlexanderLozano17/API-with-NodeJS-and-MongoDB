const express = require('express');
const router = express.Router();

const authCrt = require('./../controllers/authController');

/**
 * 
 */
router.post('/login', authCrt.login);

/**
 * 
 */
router.post('/register', authCrt.registerCount);

/**
 * 
 */
router.put('/set-password', authCrt.setPassword);

module.exports = router;