const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/userController');

/**
 * 
 */
router.get('/users', userCtrl.getUsers);

/**
 * 
 */
router.get('/user/:id', userCtrl.getUser);

/**
 * 
 */
router.post('/create-user', userCtrl.createUsers);

/**
 * 
 */
router.put('/update-user/:id', userCtrl.updateUser);

/**
 * 
 */
router.delete('/delete-user/:id', userCtrl.deleteUser);

module.exports = router;