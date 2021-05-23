const config = require('./config.js');

// Libs
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
// Routes
const scheduleApiRoutes = require('./routes/scheduleAPIRoutes');
const scheduleWebRoutes = require('./routes/scheduleWebRoutes');

// MongoDB connection URL
const dbURI = config.dbURL;
// Connect to mongodb
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
   .then((res) => {
      // Start listening for requests after successfully connecting to db
      app.listen(config.port);
      console.log('Connected to db.')
   }).catch((err) => {
      console.log(err);
   });

// Logger middleware
app.use(morgan('tiny'));

// Registering web page routes
app.use(scheduleWebRoutes);

// Json parsing middleware
app.use(express.json());

// Registering API routes
app.use(scheduleApiRoutes);

// 404
app.use((req, res) => {
   res.status(404)
      .sendFile('./views/404.html', {root: __dirname});
});