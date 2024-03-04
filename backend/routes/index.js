const express = require('express');
const indexController = require('../controllers/index');
const router = express.Router();

module.exports = router;

router.get('/', indexController.homeRoute);

module.exports = router;