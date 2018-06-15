const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const config = require('./server/config');
const port = process.env.PORT || config.serverPort;

// Set up Mongoose
mongoose.connect(config.dbConnectionString);
mongoose.Promise = global.Promise;

// Set express
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
require('./server/routes')(app);

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.listen(port, () => {
    console.log('Express listening on port', port, 'on environment', process.env.NODE_ENV);
});