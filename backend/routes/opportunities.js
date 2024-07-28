const express = require('express');
const router = express.Router();
const { getOpportunities, applyForOpportunity } = require('../controllers/opportunityController');
const authMiddleware = require('../middleware');


router.get('/', getOpportunities);
router.post('/apply/:id', authMiddleware, applyForOpportunity);
// router.get('/apply/isapplied/:id' , authMiddleware , alreadyApplyForOpportunity )

module.exports = router;
