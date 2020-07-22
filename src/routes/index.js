const express = require('express');
const UserServicesController = require('../controllers/user.controller');

const routes = express.Router();

routes.post('/users/signin', UserServicesController.signIn);
routes.get('/users/:userID', UserServicesController.getUserById);
routes.put('/users/:userID', UserServicesController.updateUser);
routes.delete('/users/:userID', UserServicesController.deleteUser);

module.exports = routes;
