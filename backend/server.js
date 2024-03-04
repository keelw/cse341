const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const professionalRoutes = require('./routes/professional');
const indexRoutes = require('./routes/index');
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use(express.static(path.join(__dirname, "../frontend")))
  .use('/professional', professionalRoutes)
  .use('/', indexRoutes);

app.listen(8080);