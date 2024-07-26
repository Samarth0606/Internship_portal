const express = require('express');
const router = express.Router();
const { getOpportunities, applyForOpportunity } = require('../controllers/opportunityController');
const authMiddleware = require('../middleware');


router.get('/', getOpportunities);
router.post('/apply/:id', authMiddleware, applyForOpportunity);

module.exports = router;
