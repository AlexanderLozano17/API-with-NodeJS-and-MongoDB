const express = require('express');
const router = express.Router();

const notificationCtrl = require('../controllers/notificationsController');

/**
 * 
 */
router.get('/notifications', notificationCtrl.getNotifications);

/**
 * 
 */
router.post('/create-notification', notificationCtrl.createNotification);

/**
 * 
 */
router.get('/notification/:id',  notificationCtrl.getNotification);

/**
 * 
 */
router.get('/notifications-user/:id',  notificationCtrl.getNotification);

/**
 * 
 */
router.put('/update-notification/:id', notificationCtrl.updateNotification);

/**
 * 
 */
router.delete('/delete-notification/:id',  notificationCtrl.deleteNotification);

/**
 * 
 */
router.post('/notify', notificationCtrl.sendNotification);

/**
 *
 */
router.post('/cancel-notification', notificationCtrl.canceldNotification);

module.exports = router;

