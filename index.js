const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/led', (req, res) => {
  console.log("YES, it's working now");
});