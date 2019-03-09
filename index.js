// server setting
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// mortor setting
const L298N = require('./l298n.js');
let l298n = new L298N(17,27,22,null,null,null);
l298n.setSpeed(l298n.NO1,80);

app.get('/forward', async (req, res) => {
  l298n.forward(l298n.NO1);
  return res.status(201).send({ message: '알았어 앞으로 갈께' });
});

app.get('/backward', async (req, res) => {
  l298n.backward(l298n.NO1);
  return res.status(201).send({ message: '알았어 뒤로 갈께' });
});

app.get('/stop', async (req, res) => {
  l298n.stop(l298n.NO1);
  return res.status(201).send({ message: '우리이제 그만하자...' });
});

app.get('/', (req, res) => {
  return res.status(201).send({ message: '여긴 왜왔어? 왜 자꾸와?? 니가 자꾸 오면,,, 내가 기다리게 되잖아ㅠㅠ' });
});

var server = require('http').Server(app);
let PORT = 8081;
server.listen(PORT, 'localhost');