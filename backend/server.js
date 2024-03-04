const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const mongodb = require("./db/connect");
const professionalRoutes = require('./routes/professional');
const indexRoutes = require('./routes/index');

const port = process.env.PORT || 8080;
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

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to database and listening on ${port}`);
  }
})

// app.listen(8080);

