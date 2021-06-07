/*
    Texts Routes
    /iecho?text=
*/
const { Router } = require('express');
const { validateText } = require('../middlewares/validateText')
const { getText } = require('../controllers/texts');

const router = Router();

// Get Text 
router.get('/', validateText, getText );

module.exports = router;