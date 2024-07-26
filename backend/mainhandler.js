const express = require('express');
const router = express.Router();
const auth = require('./routes/auth')
const opportunities = require('./routes/opportunities')

router.use('/user' , auth);
router.use('/opportunity' , opportunities);


module.exports = router;