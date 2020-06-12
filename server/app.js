const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./db/index');
// const { apiRouter } = require('./api');

const app = express();

const CLIENT_PATH = path.join(__dirname, '../client/dist');

app.use(express.static(CLIENT_PATH));
app.use(express.json());
app.use(cors());

// app.use('/api', apiRouter);

module.exports = {
  app,
};
