const express = require('express');
const router = express.Router();
const { createOrderHandler } = require('../controllers/orderController');

router.post('/', createOrderHandler);

module.exports = router;