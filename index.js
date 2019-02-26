// server setting
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


// led setting
var GPIO = require('onoff').Gpio;
var LED = new GPIO(4, 'out');
var pushButton = new GPIO(17, 'in', 'both');
var isOn = false;

function unexportOnClose() {
  LED.writeSync(0);
  LED.unexport();
  pushButton.unexport();
}
process.on('SIGINT', unexportOnClose);

const sleep = (howLong) => { 
  return new Promise((resolve) => {
    setTimeout(resolve, howLong);
  })
}

app.get('/led-on', async (req, res) => {
  var test = 100;
  for(var i = 0; i < test; i++){
    await sleep(100);
    LED.writeSync(1);
  }
  return res.status(201).send({ message: 'OK !' });
});

app.get('/', (req, res) => {
  return res.status(201).send({ message: '그건 고라지!!' });
})

var server = require('http').Server(app);
let PORT = 8081;
server.listen(PORT, 'localhost');

