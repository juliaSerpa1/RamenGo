const express = require('express');
const router = express.Router();
const { getBroths, getBrothById } = require('../controllers/brothController');

router.get('/', getBroths);

router.get('/:id', getBrothById);

module.exports = router;