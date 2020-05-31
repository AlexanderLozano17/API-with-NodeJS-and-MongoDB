const express = require('express');
const router = express.Router();
const uscoCtrl = require('../controllers/apiSimulateController');


/**
 * Simulate api usco verify student
 */
router.get('/get-data-student-usco/:email', uscoCtrl.checkStudentUscoSimulate);

/**
 * Simulate api Chamber of Commerce exist company
 */
router.get('/exist-company/:nit', uscoCtrl.checkCompanySimulate);

/**
 * Creating companies to simulate 
 */
router.post('/create-company', uscoCtrl.createCompanySimulate);

/**
 * get all companies simulate
 */
router.get('/get-companies', uscoCtrl.getAllCompaniesSimulate);

module.exports = router;