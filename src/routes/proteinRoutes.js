const express = require('express');
const router = express.Router();
const { getProteins, getProteinById } = require('../controllers/proteinController');

router.get('/', getProteins);

router.get('/:id', getProteinById);

module.exports = router;