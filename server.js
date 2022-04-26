const express = require('express');
require("dotenv").config();
const mongoose = require("mongoose");
const fs = require('fs')
const cors = require('cors')
const bodyParser = require('body-parser')




const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())



const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/coordinates', (req, res) => {
  fs.readFile('./location.json', 'utf8', (err, data) => {
      res.send(JSON.parse(data));
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});