/*
    Event Routes
    /iecho?text=
*/
const { Router } = require('express');

const { getText } = require('../controllers/texts');

const router = Router();

// Get Text 
router.get('/', getText );

module.exports = router;