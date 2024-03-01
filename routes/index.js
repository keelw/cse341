const routes = require('express').Router();
const homeController = require('../controllers/'); 

routes.get('/', homeController.homeRoute);

module.exports = routes;