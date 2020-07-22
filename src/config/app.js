const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const app = express();

const routes = require('../routes');

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/node/bff-web', routes);

module.exports = app;
