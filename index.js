const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/led', (req, res) => {
  return res.status(201).send({ message: 'hey' });
});

app.get('/', (req, res) => {
  return res.status(201).send({ message: '진짜 바뀌었네 ㅋㅋ' });
})

var server = require('http').Server(app);
let PORT = 8081;
server.listen(PORT, 'localhost');