// packages
const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// config
require('dotenv').config();
mongoose.connect(process.env.MONGO_URL);
const port = 8000;

// middlewares
app.use(express.json());
app.use(cors({ origin: '*' }));

// routes
app.use('/tree', require('./src/routes/tree'));
app.use('/user', require('./src/routes/user'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
