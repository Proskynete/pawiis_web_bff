const express = require('express');

const UserServicesController = require('../controllers/user.controller');
const isAuth = require('../middlewares/auth');

const routes = express.Router();

routes.post('/users/signin', UserServicesController.signIn);
routes.get('/users/:userID', isAuth, UserServicesController.getUserById);
routes.put('/users/:userID', isAuth, UserServicesController.updateUser);
routes.delete('/users/:userID', isAuth, UserServicesController.deleteUser);

module.exports = routes;
