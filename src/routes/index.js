const express = require('express');
const UserServicesController = require('../controllers/user.controller');
const PetServicesController = require('../controllers/pet.controller');
const LogServicesController = require('../controllers/log.controller');

const routes = express.Router();

/**
 * user services
 */
routes.post('/users/signin', UserServicesController.signIn);

/**
 * Pet services
 */
routes.post('/pet', PetServicesController.createNewPet);
routes.get('/pet', PetServicesController.getPet);
routes.get('/pets', PetServicesController.getAllPet);

/**
 * Log services
 */
routes.post('/log', LogServicesController.createNewLog);

module.exports = routes;
